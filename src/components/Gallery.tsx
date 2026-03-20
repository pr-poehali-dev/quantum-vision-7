import { useState } from "react"

interface GalleryProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Gallery",
  },
  de: {
    heading: "Galerie",
  },
  ru: {
    heading: "Галерея",
  },
}

const galleryItems = {
  en: [
    {
      id: 1,
      image: "/images/dscf3768.jpeg",
      title: "Netsuke — Mother and Child",
    },
    {
      id: 2,
      image: "/images/dscf3797.jpeg",
      title: "Bear Cub — Bone Carving",
    },
    {
      id: 3,
      image: "/images/dscf3805.jpeg",
      title: "Composition with Animals",
    },
    {
      id: 4,
      image: "/images/dscf3862.jpeg",
      title: "Inlay Work — Detail",
    },
    {
      id: 5,
      image: "/images/dscf3917.jpeg",
      title: "Traditional Netsuke",
    },
  ],
  de: [
    {
      id: 1,
      image: "/images/dscf3768.jpeg",
      title: "Netsuke — Mutter und Kind",
    },
    {
      id: 2,
      image: "/images/dscf3797.jpeg",
      title: "Bärenjunges — Knochenschnitzerei",
    },
    {
      id: 3,
      image: "/images/dscf3805.jpeg",
      title: "Komposition mit Tieren",
    },
    {
      id: 4,
      image: "/images/dscf3862.jpeg",
      title: "Einlegearbeit — Detail",
    },
    {
      id: 5,
      image: "/images/dscf3917.jpeg",
      title: "Traditionelles Netsuke",
    },
  ],
  ru: [
    {
      id: 1,
      image: "/images/dscf3768.jpeg",
      title: "Нэцкэ — Мать и дитя",
    },
    {
      id: 2,
      image: "/images/dscf3797.jpeg",
      title: "Медвежонок — резьба по кости",
    },
    {
      id: 3,
      image: "/images/dscf3805.jpeg",
      title: "Композиция с животными",
    },
    {
      id: 4,
      image: "/images/dscf3862.jpeg",
      title: "Инкрустация — деталь",
    },
    {
      id: 5,
      image: "/images/dscf3917.jpeg",
      title: "Традиционное нэцкэ",
    },
  ],
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const items = galleryItems[language]
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedItem = items.find((item) => item.id === selectedId)
  const selectedIndex = items.findIndex((item) => item.id === selectedId)

  const goToNext = () => {
    if (selectedId !== null) {
      const nextIndex = (selectedIndex + 1) % items.length
      setSelectedId(items[nextIndex].id)
    }
  }

  const goToPrev = () => {
    if (selectedId !== null) {
      const prevIndex = (selectedIndex - 1 + items.length) % items.length
      setSelectedId(items[prevIndex].id)
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

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
      </div>

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

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}