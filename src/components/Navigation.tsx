import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  language: "en" | "de" | "ru"
  onLanguageChange: (lang: "en" | "de" | "ru") => void
}

const translations = {
  en: {
    biography: "About",
    gallery: "Gallery",
    workshop: "Workshop",
    contact: "Contact",
  },
  de: {
    biography: "Uber mich",
    gallery: "Galerie",
    workshop: "Werkstatt",
    contact: "Kontakt",
  },
  ru: {
    biography: "О мастере",
    gallery: "Галерея",
    workshop: "Мастерская",
    contact: "Контакты",
  },
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHeroSection, setIsHeroSection] = useState(true)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsHeroSection(heroBottom > 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinkColor = "text-gold"
  const navLinkHoverColor = "hover:text-gold/70"
  const logoColor = isHeroSection ? "text-white" : "text-charcoal"
  const menuButtonColor = isHeroSection ? "text-white" : "text-charcoal"
  const languageButtonActiveColor = "text-gold"
  const languageButtonInactiveColor = isHeroSection
    ? "text-white/60 hover:text-white"
    : "text-charcoal/60 hover:text-charcoal"
  const navBgColor = isHeroSection ? "bg-transparent" : "bg-cream/95"
  const borderColor = isHeroSection ? "border-white/10" : "border-taupe/20"
  const mobileMenuBg = isHeroSection ? "bg-charcoal/95 backdrop-blur-sm" : "bg-cream/95"
  const mobileLinkColor = isHeroSection ? "text-white" : "text-charcoal"

  return (
    <nav
      className={`fixed w-full ${navBgColor} backdrop-blur-sm z-50 border-b ${borderColor} transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Language Selector — слева */}
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {(["en", "de", "ru"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`text-xs font-medium transition-colors duration-300 ${
                    language === lang ? languageButtonActiveColor : languageButtonInactiveColor
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden ${menuButtonColor} transition-colors duration-300`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu — по центру */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            <a href="#biography" className={`text-sm ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}>{t.biography}</a>
            <a href="#gallery" className={`text-sm ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}>{t.gallery}</a>
            <a href="#workshop" className={`text-sm ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}>{t.workshop}</a>
            <a href="#contact" className={`text-sm ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}>{t.contact}</a>
          </div>

          {/* Пустой div для симметрии */}
          <div className="hidden md:block w-16" />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden pb-4 space-y-3 border-t ${borderColor} ${mobileMenuBg} transition-all duration-300`}
          >
            <a
              href="#biography"
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.biography}
            </a>
            <a
              href="#gallery"
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.gallery}
            </a>
            <a
              href="#workshop"
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.workshop}
            </a>
            <a
              href="#contact"
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.contact}
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}