interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    name: "Evgenia Murashkina",
    subtitle: "Netsuke & Bone Carving Master",
    description: "Over 10 years of crafting exquisite miniature sculptures — fine detailing, inlay work, tinting, and signature compositions with children and animals",
    scroll: "Scroll",
  },
  de: {
    name: "Evgenia Murashkina",
    subtitle: "Meisterin der Netsuke- und Knochenschnitzerei",
    description: "Über 10 Jahre Erfahrung in der Schaffung exquisiter Miniaturskulpturen — Feindetaillierung, Einlegearbeiten und charakteristische Kompositionen",
    scroll: "Scroll",
  },
  ru: {
    name: "Евгения Мурашкина",
    subtitle: "Мастер резьбы нэцкэ и фигурок из кости",
    description: "Более 10 лет создания изысканных миниатюр — тонкая проработка деталей, инкрустация, тонировка и авторские композиции с детьми и животными",
    scroll: "Листать",
  },
}

function AnimatedName({ name }: { name: string }) {
  const letters = name.split("")
  return (
    <span aria-label={name}>
      {letters.map((char, i) => (
        <span
          key={i}
          className="animate-letter"
          style={{ animationDelay: `${300 + i * 45}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dscf3938.jpeg"
          alt="Евгения Мурашкина — мастер резьбы"
          className="w-full h-full object-cover"
        />
        {/* Многослойное затемнение для атмосферы */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Логотип слева вверху (поверх навигации не мешает — nav прозрачная) */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">

          {/* Декоративная линия сверху */}
          <div
            className="animate-line-expand h-px bg-gold/60 mb-10"
            style={{ animationDelay: "200ms" }}
          />

          {/* Подзаголовок — появляется первым */}
          <p
            className="animate-slide-up-soft text-gold/90 text-xs md:text-sm tracking-[0.3em] uppercase font-light mb-6"
            style={{ animationDelay: "250ms" }}
          >
            {t.subtitle}
          </p>

          {/* Имя — посимвольная анимация */}
          <h1 className="text-white mb-8 leading-none tracking-tight">
            <AnimatedName name={t.name} />
          </h1>

          {/* Описание */}
          <p
            className="animate-slide-up-soft text-white/70 font-light max-w-xl text-base md:text-lg leading-relaxed mb-12"
            style={{ animationDelay: "1100ms" }}
          >
            {t.description}
          </p>

          {/* Соцсети */}
          <div
            className="animate-fade-in flex gap-6"
            style={{ animationDelay: "1400ms" }}
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors duration-300 text-xs tracking-widest uppercase"
            >
              Instagram
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors duration-300 text-xs tracking-widest uppercase"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animationDelay: "1800ms" }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">{t.scroll}</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
