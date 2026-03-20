interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Exhibitions & Events",
    learnMore: "Learn More",
  },
  de: {
    heading: "Ausstellungen & Veranstaltungen",
    learnMore: "Mehr erfahren",
  },
  ru: {
    heading: "Выставки и события",
    learnMore: "Подробнее",
  },
}

const concerts = {
  en: [
    {
      date: "15.04.2026",
      time: "11:00",
      title: "Art of the East — International Netsuke Exhibition",
      venue: "Central House of Artists",
      location: "Moscow",
    },
    {
      date: "10.05.2026",
      time: "12:00",
      title: "Masters of Bone Carving — Craft Fair",
      venue: "Sokolniki Exhibition Center",
      location: "Moscow",
    },
    {
      date: "20.06.2026",
      time: "10:00",
      title: "Summer Craft Gallery — Author's Works",
      venue: "Etazhи Cultural Center",
      location: "St. Petersburg",
    },
  ],
  de: [
    {
      date: "15.04.2026",
      time: "11:00",
      title: "Kunst des Ostens — Internationale Netsuke-Ausstellung",
      venue: "Zentrales Kunstlerhaus",
      location: "Moskau",
    },
    {
      date: "10.05.2026",
      time: "12:00",
      title: "Meister der Knochenschnitzerei — Kunsthandwerksmesse",
      venue: "Ausstellungszentrum Sokolniki",
      location: "Moskau",
    },
    {
      date: "20.06.2026",
      time: "10:00",
      title: "Sommer-Kunstgalerie — Autorwerke",
      venue: "Kulturzentrum Etazhi",
      location: "St. Petersburg",
    },
  ],
  ru: [
    {
      date: "15 апреля 2026",
      time: "11:00",
      title: "Искусство Востока — Международная выставка нэцкэ",
      venue: "Центральный дом художника",
      location: "Москва",
    },
    {
      date: "10 мая 2026",
      time: "12:00",
      title: "Мастера резьбы по кости — Ярмарка ремёсел",
      venue: "Выставочный центр Сокольники",
      location: "Москва",
    },
    {
      date: "20 июня 2026",
      time: "10:00",
      title: "Летняя галерея ремёсел — Авторские работы",
      venue: "Культурный центр «Этажи»",
      location: "Санкт-Петербург",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {concertList.map((concert, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{concert.date}</h3>
                  <small className="text-taupe">{concert.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{concert.title}</h3>
                  <p className="text-charcoal/70 mb-1">{concert.venue}</p>
                  <small className="text-taupe">{concert.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}