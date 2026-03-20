import { useEffect, useState } from "react"

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

function AnimatedName({ name, started }: { name: string; started: boolean }) {
  return (
    <span
      aria-label={name}
      style={{
        opacity: started ? 1 : 0,
        filter: started ? "blur(0)" : "blur(10px)",
        transition: "opacity 2.2s ease 400ms, filter 2.6s ease 400ms",
        color: "rgba(255,255,255,0.75)",
      }}
    >
      {name}
    </span>
  )
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const fadeIn = (delay: number): React.CSSProperties => ({
    opacity: started ? 1 : 0,
    transform: started ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 1s ease ${delay}ms, transform 1s ease ${delay}ms`,
  })

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dscf3938.jpeg"
          alt="Евгения Мурашкина — мастер резьбы"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content — прижато к низу */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">

          {/* Золотая линия */}
          <div style={{
            height: "1px",
            backgroundColor: "rgba(201,169,97,0.6)",
            width: started ? "3rem" : "0px",
            opacity: started ? 1 : 0,
            transition: "width 0.8s ease 200ms, opacity 0.8s ease 200ms",
            marginBottom: "2.5rem",
          }} />

          {/* Подзаголовок */}
          <p
            className="text-xs md:text-sm font-light uppercase"
            style={{
              ...fadeIn(250),
              color: "rgba(201,169,97,0.9)",
              letterSpacing: "0.3em",
              marginBottom: "1.5rem",
            }}
          >
            {t.subtitle}
          </p>

          {/* Имя — посимвольная анимация */}
          <h1
            className="text-white mb-8 leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 300 }}
          >
            <AnimatedName name={t.name} started={started} />
          </h1>

          {/* Описание */}
          <p
            className="font-light max-w-xl text-base md:text-lg leading-relaxed mb-12"
            style={{ ...fadeIn(1100), color: "rgba(255,255,255,0.75)" }}
          >
            {t.description}
          </p>

          {/* Соцсети */}
          <div className="flex gap-6" style={fadeIn(1400)}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300 text-xs uppercase"
              style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em" }}
            >
              Instagram
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300 text-xs uppercase"
              style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em" }}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={fadeIn(1800)}
      >
        <span className="text-xs uppercase" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em" }}>
          {t.scroll}
        </span>
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }}
        />
      </div>
    </section>
  )
}