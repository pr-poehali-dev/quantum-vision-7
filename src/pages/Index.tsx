import { useState } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Biography from "@/components/Biography"
import Gallery from "@/components/Gallery"
import Workshop from "@/components/Workshop"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Index() {
  const [language, setLanguage] = useState<"en" | "de" | "ru">("ru")

  return (
    <div className="min-h-screen bg-background">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Biography language={language} />
      <Gallery language={language} />
      <Workshop language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}