import json
import smtplib
import os
import base64
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage


def handler(event: dict, context) -> dict:
    """Отправка заявки на почту kemerovo@yandex.ru с поддержкой вложений"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()
    subject = body.get('subject', 'Новая заявка с сайта')
    attachments = body.get('attachments', [])

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': '\u0418\u043c\u044f \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b'})
        }

    smtp_password = os.environ['SMTP_PASSWORD_FPS']
    from_email = 'fps-kemerovo@yandex.ru'
    to_email = 'fps-kemerovo@yandex.ru'

    html = f"""
    <h2>{subject}</h2>
    <p><b>Имя:</b> {name}</p>
    <p><b>Телефон:</b> {phone}</p>
    {'<p><b>Сообщение:</b><br>' + message.replace(chr(10), '<br>') + '</p>' if message else ''}
    """

    msg = MIMEMultipart('mixed')
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    for att in attachments:
        try:
            img_data = base64.b64decode(att['data'])
            mime_type = att.get('type', 'image/jpeg').split('/')[-1]
            img = MIMEImage(img_data, _subtype=mime_type)
            img.add_header('Content-Disposition', 'attachment', filename=att.get('name', 'photo.jpg'))
            msg.attach(img)
        except Exception:
            pass

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }