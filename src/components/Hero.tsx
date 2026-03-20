import { useEffect, useState } from "react"

interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    name: "Evgenia Murashkina",
    subtitle: "Netsuke & Bone Carving Master",
    scroll: "Scroll",
  },
  de: {
    name: "Evgenia Murashkina",
    subtitle: "Meisterin der Netsuke- und Knochenschnitzerei",
    scroll: "Scroll",
  },
  ru: {
    name: "Евгения Мурашкина",
    subtitle: "Мастер резьбы по кости",
    scroll: "Листать",
  },
}

const slides = [
  "https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/4081f4f3-6f0f-4f8c-8644-3893b5eedd2a.jpg",
  "https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/8eded800-3946-4e58-9191-a17d178c55e3.jpg",
  "https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/35ed2e4c-bc67-48a0-82b8-5016fe2900ca.jpg",
  "https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/8fca4e3b-e1be-4a2e-a7fe-4583fb05db44.jpg",
]

function AnimatedName({ name, started }: { name: string; started: boolean }) {
  return (
    <span
      aria-label={name}
      style={{
        opacity: started ? 1 : 0,
        filter: started ? "blur(0)" : "blur(10px)",
        transition: "opacity 2.2s ease 400ms, filter 2.6s ease 400ms",
        color: "rgba(255,255,255,0.45)",
      }}
    >
      {name}
    </span>
  )
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]
  const [started, setStarted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlide, setNextSlide] = useState(1)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length
      setNextSlide(next)
      setTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(next)
        setTransitioning(false)
      }, 1800)
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const fadeIn = (delay: number): React.CSSProperties => ({
    opacity: started ? 1 : 0,
    transform: started ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 1s ease ${delay}ms, transform 1s ease ${delay}ms`,
  })

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Текущий слайд */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[currentSlide]}
          alt="Мастерская Евгении Мурашкиной"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Следующий слайд — проявляется поверх */}
      <div
        className="absolute inset-0 z-1"
        style={{ opacity: transitioning ? 1 : 0, transition: "opacity 1.8s ease" }}
      >
        <img
          src={slides[nextSlide]}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-20 right-8 z-10 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            style={{
              width: "2px",
              height: i === currentSlide ? "24px" : "12px",
              backgroundColor: i === currentSlide ? "rgba(201,169,97,0.9)" : "rgba(255,255,255,0.3)",
              border: "none",
              padding: 0,
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">

          {/* Логотип в круге */}
          <div style={{
            ...fadeIn(100),
            marginBottom: "2rem",
          }}>
            <div style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              border: "1px solid rgba(201,169,97,0.5)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img
                src="https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/40b63ad4-2185-4492-b6fa-4e3b2799af8d.jpg"
                alt="Логотип"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
              />
            </div>
          </div>

          {/* Золотая линия */}
          <div style={{
            height: "1px",
            backgroundColor: "rgba(201,169,97,0.6)",
            width: started ? "3rem" : "0px",
            opacity: started ? 1 : 0,
            transition: "width 0.8s ease 200ms, opacity 0.8s ease 200ms",
            marginBottom: "2rem",
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

          {/* Имя */}
          <h1
            className="mb-8 leading-none"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 300 }}
          >
            <AnimatedName name={t.name} started={started} />
          </h1>

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
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300 text-xs uppercase"
              style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em" }}
            >
              ВКонтакте
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="relative z-10 flex flex-col items-center gap-2 pb-8"
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