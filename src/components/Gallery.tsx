import { useState } from "react"
import Icon from "@/components/ui/icon"

interface GalleryProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Gallery",
    tabPortfolio: "Portfolio",
    tabAvailable: "Available Works",
    inquire: "Request Price",
    available: "Available",
  },
  de: {
    heading: "Galerie",
    tabPortfolio: "Portfolio",
    tabAvailable: "Verfügbare Werke",
    inquire: "Preis anfragen",
    available: "Verfügbar",
  },
  ru: {
    heading: "Галерея",
    tabPortfolio: "Портфолио",
    tabAvailable: "Готовые работы в наличии",
    inquire: "Запрос стоимости",
    available: "В наличии",
  },
}

const IMG = {
  motherChild: "https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/940103a2-4617-4914-9e27-f55d951674dd.jpg",
  bear: "https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/898cf5d1-fed0-4067-a381-6ff04cd30fef.jpg",
  fox: "https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/82291bbf-a079-4247-b75f-e8dd277a6981.jpg",
  children: "https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/8210b632-ca67-4fc4-bd6f-f38e34ee79d3.jpg",
  rabbit: "https://cdn.poehali.dev/projects/9966625e-7cf6-4175-8046-071e854e4090/files/319c43d0-0256-4431-834b-782fc1bbf2e8.jpg",
}

const galleryItems = {
  en: [
    { id: 1, image: IMG.motherChild, title: "Netsuke — Mother and Child" },
    { id: 2, image: IMG.bear, title: "Bear Cub — Bone Carving" },
    { id: 3, image: IMG.fox, title: "Fox with Cubs" },
    { id: 4, image: IMG.children, title: "Two Children Playing" },
    { id: 5, image: IMG.rabbit, title: "Rabbit — Traditional Netsuke" },
  ],
  de: [
    { id: 1, image: IMG.motherChild, title: "Netsuke — Mutter und Kind" },
    { id: 2, image: IMG.bear, title: "Bärenjunges — Knochenschnitzerei" },
    { id: 3, image: IMG.fox, title: "Fuchs mit Jungen" },
    { id: 4, image: IMG.children, title: "Zwei spielende Kinder" },
    { id: 5, image: IMG.rabbit, title: "Hase — Traditionelles Netsuke" },
  ],
  ru: [
    { id: 1, image: IMG.motherChild, title: "Нэцкэ — Мать и дитя" },
    { id: 2, image: IMG.bear, title: "Медвежонок — резьба по кости" },
    { id: 3, image: IMG.fox, title: "Лиса с лисятами" },
    { id: 4, image: IMG.children, title: "Двое детей за игрой" },
    { id: 5, image: IMG.rabbit, title: "Заяц — традиционное нэцкэ" },
  ],
}

const availableItems = {
  en: [
    { id: 101, image: IMG.fox, title: "Netsuke «Fox and Cub»", description: "Mammoth bone, inlay, tinting. Size: 4×3 cm" },
    { id: 102, image: IMG.children, title: "Composition «Two Children»", description: "Bone, patination. Size: 6×4 cm" },
    { id: 103, image: IMG.bear, title: "Netsuke «Bear»", description: "Mammoth bone, metal inlay. Size: 3×3 cm" },
    { id: 104, image: IMG.motherChild, title: "Netsuke «Mother and Child»", description: "Bone, multi-layer tinting. Size: 5×3 cm" },
  ],
  de: [
    { id: 101, image: IMG.fox, title: "Netsuke «Fuchs und Junges»", description: "Mammut-Knochen, Einlage, Tönung. Größe: 4×3 cm" },
    { id: 102, image: IMG.children, title: "Komposition «Zwei Kinder»", description: "Knochen, Patinierung. Größe: 6×4 cm" },
    { id: 103, image: IMG.bear, title: "Netsuke «Bär»", description: "Mammut-Knochen, Metalleinlage. Größe: 3×3 cm" },
    { id: 104, image: IMG.motherChild, title: "Netsuke «Mutter und Kind»", description: "Knochen, mehrschichtige Tönung. Größe: 5×3 cm" },
  ],
  ru: [
    { id: 101, image: IMG.fox, title: "Нэцкэ «Лиса с лисёнком»", description: "Мамонтовая кость, инкрустация, тонировка. Размер: 4×3 см" },
    { id: 102, image: IMG.children, title: "Композиция «Двое детей»", description: "Кость, патинирование. Размер: 6×4 см" },
    { id: 103, image: IMG.bear, title: "Нэцкэ «Медведь»", description: "Мамонтовая кость, инкрустация металлом. Размер: 3×3 см" },
    { id: 104, image: IMG.motherChild, title: "Нэцкэ «Мать и дитя»", description: "Кость, многослойная тонировка. Размер: 5×3 см" },
  ],
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const items = galleryItems[language]
  const available = availableItems[language]
  const [activeTab, setActiveTab] = useState<"portfolio" | "available">("portfolio")
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedItem = items.find((item) => item.id === selectedId)
  const selectedIndex = items.findIndex((item) => item.id === selectedId)

  const goToNext = () => {
    const nextIndex = (selectedIndex + 1) % items.length
    setSelectedId(items[nextIndex].id)
  }

  const goToPrev = () => {
    const prevIndex = (selectedIndex - 1 + items.length) % items.length
    setSelectedId(items[prevIndex].id)
  }

  const handleInquire = (title: string) => {
    const subject = encodeURIComponent(`Запрос стоимости: ${title}`)
    const body = encodeURIComponent(`Здравствуйте, Евгения!\n\nМеня интересует работа «${title}».\nПрошу сообщить стоимость и условия приобретения.\n\nС уважением,`)
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="gallery" className="py-24 md:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-10 border-b border-taupe/20">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`pb-3 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === "portfolio"
                ? "border-gold text-gold"
                : "border-transparent text-charcoal/50 hover:text-charcoal"
            }`}
          >
            {t.tabPortfolio}
          </button>
          <button
            onClick={() => setActiveTab("available")}
            className={`pb-3 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === "available"
                ? "border-gold text-gold"
                : "border-transparent text-charcoal/50 hover:text-charcoal"
            }`}
          >
            {t.tabAvailable}
          </button>
        </div>

        {/* Portfolio Grid */}
        {activeTab === "portfolio" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className="group overflow-hidden bg-charcoal/5 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <small className="text-charcoal/70 font-medium">{item.title}</small>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Available Works Grid */}
        {activeTab === "available" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {available.map((item) => (
              <div key={item.id} className="group overflow-hidden bg-charcoal/5 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-charcoal font-medium mb-1 text-sm">{item.title}</p>
                  <small className="text-charcoal/50 mb-4 leading-relaxed flex-1">{item.description}</small>
                  <button
                    onClick={() => handleInquire(item.title)}
                    className="w-full border border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 py-2 text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <Icon name="Mail" size={14} />
                    {t.inquire}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}