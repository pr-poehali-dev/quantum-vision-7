interface FooterProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    copyright: "All rights reserved.",
    followMe: "Follow",
    subtitle: "Netsuke & Bone Carving Master",
    quickLinks: "Quick Links",
    biography: "About",
    gallery: "Gallery",
    workshop: "Workshop",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
  },
  de: {
    copyright: "Alle Rechte vorbehalten.",
    followMe: "Folgen Sie mir",
    subtitle: "Meisterin der Netsuke- und Knochenschnitzerei",
    quickLinks: "Schnelllinks",
    biography: "Uber mich",
    gallery: "Galerie",
    workshop: "Werkstatt",
    privacyPolicy: "Datenschutz",
    terms: "AGB",
  },
  ru: {
    copyright: "Все права защищены.",
    followMe: "Соцсети",
    subtitle: "Мастер резьбы нэцкэ и фигурок из кости",
    quickLinks: "Навигация",
    biography: "О мастере",
    gallery: "Галерея",
    workshop: "Мастерская",
    privacyPolicy: "Политика конфиденциальности",
    terms: "Условия",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-charcoal text-warm-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-warm-white mb-4">Е. Мурашкина</h3>
            <small className="text-warm-white/70">{t.subtitle}</small>
          </div>

          <div>
            <h3 className="text-warm-white mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-warm-white/70">
              <li>
                <a href="#biography" className="hover:text-gold transition-colors">
                  {t.biography}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">
                  {t.gallery}
                </a>
              </li>
              <li>
                <a href="#workshop" className="hover:text-gold transition-colors">
                  {t.workshop}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-warm-white mb-4">{t.followMe}</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-warm-white/70 hover:text-gold transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com" className="text-warm-white/70 hover:text-gold transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-warm-white/70">
          <small>&copy; 2026 Евгения Мурашкина. {t.copyright}</small>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-warm-white transition-colors">
              {t.privacyPolicy}
            </a>
            <a href="#" className="hover:text-warm-white transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
