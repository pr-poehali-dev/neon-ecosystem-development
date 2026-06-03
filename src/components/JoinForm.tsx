import { useState } from "react";

const BG = "https://cdn.poehali.dev/projects/93aee465-1545-4568-8d99-56bb6cdfafaf/files/4aa0a53d-6c7b-4708-b4d1-32d0ee7800a6.jpg";

export function JoinForm() {
  const [sent, setSent] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4"
      style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/75" />

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