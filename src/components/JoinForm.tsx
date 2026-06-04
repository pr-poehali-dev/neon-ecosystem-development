import { useState, useRef } from "react";

const BG = "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/bucket/806cc9f8-62c6-4709-a2be-818e3d1de1db.jpg";

export function JoinForm() {
  const [sent, setSent] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    sonName: "",
    sonYears: "",
    story: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files).slice(0, 5));
    }
  };

  const removePhoto = (i: number) => {
    setPhotos(photos.filter((_, idx) => idx !== i));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      form.city ? `Город: ${form.city}` : '',
      form.sonName ? `Имя сына: ${form.sonName}` : '',
      form.sonYears ? `Годы жизни: ${form.sonYears}` : '',
      form.story ? `О сыне: ${form.story}` : '',
      photos.length ? `Фото: ${photos.map(f => f.name).join(', ')}` : '',
    ].filter(Boolean).join('\n');

    const toBase64 = (file: File): Promise<string> =>
      new Promise((res) => {
        const r = new FileReader();
        r.onload = () => res((r.result as string).split(',')[1]);
        r.readAsDataURL(file);
      });

    const attachments = await Promise.all(
      photos.map(async (f) => ({ name: f.name, type: f.type, data: await toBase64(f) }))
    );

    await fetch("https://functions.poehali.dev/da808dee-cdc4-49c7-9b65-7504f64ddd4d", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, phone: form.phone, message, subject: "Вступить в фонд", attachments }),
    });
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/90" />

      <div className="container mx-auto relative z-10 max-w-2xl">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Мы вместе
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient text-white mb-4">
            Вступить <i className="font-light">в фонд</i>
          </h2>
          <p className="font-mono text-sm text-foreground/55 max-w-md mx-auto">
            Фонд создан мамами для мам. Заполните форму — мы свяжемся с вами и расскажем, как мы можем помочь друг другу.
          </p>
        </div>

        {sent ? (
          <div className="text-center border border-white/10 rounded-2xl p-12 bg-black/40 backdrop-blur-sm">
            <div className="text-4xl mb-6">✦</div>
            <h3 className="font-sentient text-2xl text-white mb-4">Спасибо, что написали нам</h3>
            <p className="font-mono text-sm text-foreground/60">
              Мы получили вашу заявку и свяжемся с вами в ближайшее время.
              <br />Вы не одна — мы рядом.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border border-white/10 rounded-2xl p-8 bg-black/40 backdrop-blur-sm space-y-5">
            {/* Ваши данные */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Ваши данные</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-foreground/50 uppercase tracking-wider block mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Как вас зовут"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-mono text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-foreground/50 uppercase tracking-wider block mb-2">Телефон *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-mono text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="font-mono text-xs text-foreground/50 uppercase tracking-wider block mb-2">Город</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Ваш город"
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-mono text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
              </div>
            </div>

            {/* О сыне */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">О вашем сыне</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-foreground/50 uppercase tracking-wider block mb-2">Имя сына</label>
                  <input
                    type="text"
                    name="sonName"
                    value={form.sonName}
                    onChange={handleChange}
                    placeholder="Имя и фамилия"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-mono text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-foreground/50 uppercase tracking-wider block mb-2">Годы жизни</label>
                  <input
                    type="text"
                    name="sonYears"
                    value={form.sonYears}
                    onChange={handleChange}
                    placeholder="1998 — 2023"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-mono text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="font-mono text-xs text-foreground/50 uppercase tracking-wider block mb-2">Несколько слов о нём</label>
                <textarea
                  name="story"
                  value={form.story}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Расскажите о вашем сыне — каким он был, чем жил, что любил..."
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white font-mono text-sm placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                />
              </div>
              <div className="mt-4">
                <label className="font-mono text-xs text-foreground/50 uppercase tracking-wider block mb-2">Фото сына</label>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="w-full border border-dashed border-white/20 hover:border-primary/50 rounded-lg px-4 py-4 font-mono text-sm text-foreground/40 hover:text-foreground/70 transition-colors text-center"
                >
                  {photos.length === 0 ? "[ Прикрепить фото (до 5 файлов) ]" : `[ Добавить ещё ]`}
                </button>
                {photos.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {photos.map((f, i) => (
                      <div key={i} className="relative group">
                        <img
                          src={URL.createObjectURL(f)}
                          alt={f.name}
                          className="w-16 h-16 object-cover rounded-lg border border-white/10"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(i)}
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-black border border-white/20 rounded-full text-white/60 hover:text-white text-xs flex items-center justify-center"
                        >×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full font-mono text-sm uppercase tracking-widest border border-primary/60 hover:bg-primary/10 text-white px-8 py-4 rounded-full transition-all duration-300"
            >
              [ Отправить заявку ]
            </button>

            <p className="font-mono text-xs text-foreground/30 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
}