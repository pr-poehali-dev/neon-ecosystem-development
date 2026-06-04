export function Partners() {
  return (
    <section id="partners" className="relative py-28 px-4 bg-[#f5f0e8]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b8972e] to-transparent" />

      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#b8972e]/50" />
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#b8972e]">
              Официальное сотрудничество
            </p>
            <div className="h-px w-16 bg-[#b8972e]/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-sentient text-[#1a1a1a] mb-5">
            Наши <i className="font-light text-[#4a3f2f]">партнёры</i>
          </h2>
          <p className="font-mono text-sm text-[#5a5040] max-w-lg leading-relaxed">
            Фонд осуществляет деятельность в партнёрстве с государственными
            и общественными организациями Российской Федерации
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border border-[#b8972e]/30 rounded-xl px-8 py-6 bg-white/60 max-w-xl mx-auto">
          <p className="font-mono text-xs text-[#5a5040] uppercase tracking-widest text-center">
            Заинтересованы в сотрудничестве?
          </p>
          <a
            href="mailto:kemerovo@yandex.ru"
            className="font-mono text-xs uppercase tracking-widest text-[#b8972e] hover:text-[#8a6f1e] border border-[#b8972e]/40 hover:border-[#b8972e] px-6 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            Направить запрос
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b8972e] to-transparent" />
    </section>
  );
}
