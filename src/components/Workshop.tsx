import { useState } from "react"
import Icon from "@/components/ui/icon"

interface WorkshopProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Workshop",
    description: "A glimpse into the craft — from raw bone to finished masterpiece",
    photoTab: "Photos",
    videoTab: "Videos",
    close: "Close",
    addPhotoHint: "Your process photos will appear here",
    addVideoHint: "Your process videos will appear here",
  },
  de: {
    heading: "Werkstatt",
    description: "Ein Blick in das Handwerk — vom Rohknochen zum fertigen Meisterwerk",
    photoTab: "Fotos",
    videoTab: "Videos",
    close: "Schließen",
    addPhotoHint: "Hier erscheinen Ihre Prozessfotos",
    addVideoHint: "Hier erscheinen Ihre Prozessvideos",
  },
  ru: {
    heading: "Мастерская",
    description: "Взгляд изнутри — от заготовки до готового шедевра",
    photoTab: "Фото",
    videoTab: "Видео",
    close: "Закрыть",
    addPhotoHint: "Здесь появятся ваши фото процесса",
    addVideoHint: "Здесь появятся ваши видео процесса",
  },
}

const processPhotos = [
  { id: 1, src: "/images/dscf3768.jpeg", caption: { ru: "Заготовка из кости", en: "Raw bone blank", de: "Rohknochen-Rohling" } },
  { id: 2, src: "/images/dscf3797.jpeg", caption: { ru: "Первичная обработка", en: "Initial shaping", de: "Erste Bearbeitung" } },
  { id: 3, src: "/images/dscf3805.jpeg", caption: { ru: "Проработка деталей", en: "Detail carving", de: "Detailschnitzerei" } },
  { id: 4, src: "/images/dscf3862.jpeg", caption: { ru: "Инкрустация", en: "Inlay work", de: "Einlegearbeit" } },
  { id: 5, src: "/images/dscf3917.jpeg", caption: { ru: "Тонировка", en: "Tinting", de: "Tönung" } },
  { id: 6, src: "/images/dscf3938.jpeg", caption: { ru: "Финальная полировка", en: "Final polishing", de: "Endpolitur" } },
]

const processVideos = [
  {
    id: 1,
    youtubeId: "",
    caption: { ru: "Резьба нэцкэ — процесс", en: "Netsuke carving process", de: "Netsuke-Schnitzprozess" },
    placeholder: true,
  },
  {
    id: 2,
    youtubeId: "",
    caption: { ru: "Инкрустация металлом", en: "Metal inlay technique", de: "Metalleinlage-Technik" },
    placeholder: true,
  },
  {
    id: 3,
    youtubeId: "",
    caption: { ru: "Тонировка и патинирование", en: "Tinting & patination", de: "Tönung & Patinierung" },
    placeholder: true,
  },
]

export default function Workshop({ language }: WorkshopProps) {
  const t = translations[language]
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos")
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const selectedIndex = processPhotos.findIndex((p) => p.id === selectedPhoto)

  const goPrev = () => {
    if (selectedIndex > 0) setSelectedPhoto(processPhotos[selectedIndex - 1].id)
    else setSelectedPhoto(processPhotos[processPhotos.length - 1].id)
  }

  const goNext = () => {
    if (selectedIndex < processPhotos.length - 1) setSelectedPhoto(processPhotos[selectedIndex + 1].id)
    else setSelectedPhoto(processPhotos[0].id)
  }

  const selectedItem = processPhotos.find((p) => p.id === selectedPhoto)

  return (
    <section id="workshop" className="py-24 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent mb-6"></div>
          <p className="text-taupe text-lg">{t.description}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-10 border-b border-taupe/20">
          <button
            onClick={() => setActiveTab("photos")}
            className={`pb-3 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === "photos"
                ? "border-gold text-gold"
                : "border-transparent text-charcoal/50 hover:text-charcoal"
            }`}
          >
            {t.photoTab}
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`pb-3 text-sm font-medium transition-colors duration-200 border-b-2 -mb-px ${
              activeTab === "videos"
                ? "border-gold text-gold"
                : "border-transparent text-charcoal/50 hover:text-charcoal"
            }`}
          >
            {t.videoTab}
          </button>
        </div>

        {/* Photos Grid */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {processPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo.id)}
                className="group overflow-hidden bg-charcoal/5 cursor-pointer"
              >
                <div className="relative h-52 md:h-64 overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.caption[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                </div>
                <div className="p-3">
                  <small className="text-charcoal/70 font-medium">{photo.caption[language]}</small>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processVideos.map((video) => (
              <div key={video.id} className="overflow-hidden bg-charcoal/5">
                {video.placeholder || !video.youtubeId ? (
                  <div className="relative h-52 md:h-48 bg-charcoal/10 flex flex-col items-center justify-center gap-3">
                    <Icon name="Play" size={40} className="text-charcoal/30" />
                    <small className="text-charcoal/40 text-center px-4">{video.caption[language]}</small>
                  </div>
                ) : (
                  <div className="relative" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.caption[language]}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="p-3">
                  <small className="text-charcoal/70 font-medium">{video.caption[language]}</small>
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
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.src}
              alt={selectedItem.caption[language]}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            <button
              onClick={goPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
            >
              <Icon name="ChevronLeft" size={40} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
            >
              <Icon name="ChevronRight" size={40} />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedItem.caption[language]}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
