import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  language: "en" | "de" | "ru"
  onLanguageChange: (lang: "en" | "de" | "ru") => void
}

const translations = {
  en: {
    biography: "Biography",
    concerts: "Concerts",
    gallery: "Gallery",
    contact: "Contact",
  },
  de: {
    biography: "Biographie",
    concerts: "Konzerte",
    gallery: "Galerie",
    contact: "Kontakt",
  },
  ru: {
    biography: "Биография",
    concerts: "Концерты",
    gallery: "Галерея",
    contact: "Контакт",
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

  const navLinkColor = isHeroSection ? "text-white" : "text-charcoal"
  const navLinkHoverColor = isHeroSection ? "hover:text-gold" : "hover:text-gold"
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
          {/* Logo */}
          <div className={`${logoColor} font-serif text-2xl font-normal tracking-wide transition-colors duration-300`}>
            A. Voss
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#biography"
              className={`text-sm ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}
            >
              {t.biography}
            </a>
            <a
              href="#concerts"
              className={`text-sm ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}
            >
              {t.concerts}
            </a>
            <a
              href="#gallery"
              className={`text-sm ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}
            >
              {t.gallery}
            </a>
            <a
              href="#contact"
              className={`text-sm ${navLinkColor} ${navLinkHoverColor} transition-colors duration-300`}
            >
              {t.contact}
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-4">
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
              href="#concerts"
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.concerts}
            </a>
            <a
              href="#gallery"
              className={`block text-sm ${mobileLinkColor} hover:text-gold transition-colors duration-300 py-2`}
            >
              {t.gallery}
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
