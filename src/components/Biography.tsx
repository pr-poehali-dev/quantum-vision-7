interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Biography",
    paragraphs: [
      "Alexander Voss began his musical education at the Royal Academy of Music in London and went on to study at the Juilliard School in New York, where he was taught by distinguished professors including Maria Steinberg, Richard Hartmann, and Prof. Elisabeth Werner. He is currently continuing his studies at the Berlin University of the Arts under the guidance of the renowned pianist Daniel Barenboim.",
      "From an early age, his talent was recognized through numerous awards, including several first prizes with maximum scores at international competitions as well as the Young Virtuoso Prize. In 2016, he was accepted into the \"International Foundation for Musical Excellence,\" where he participated in a documentary production in 2021.",
      "Significant masterclasses and collaboration with renowned professors such as Prof. Lang Lang, Martha Argerich, and Prof. Andras Schiff provided him with valuable artistic inspiration. As part of the 5th International Piano Festival in Vienna in 2024, he participated in a masterclass with the internationally celebrated pianist Krystian Zimerman, aiming to gain further impulses for his pianistic career.",
      "Through scholarships from the Steinway Foundation and currently from the European Music Academy, Alexander Voss has received valuable support on his musical journey.",
      "His stage presence has led him to prestigious concert halls such as the Royal Albert Hall, Carnegie Hall, Berlin Philharmonie, Vienna Musikverein, and the Sydney Opera House, among many other significant venues. During the \"European Young Talents Tour,\" he captivated audiences across the continent at renowned locations such as Teatro La Fenice in Venice, Concertgebouw in Amsterdam, and many more.",
      "Innovative perspective, determination, and exceptional musical talent naturally guide the young musician to the world's finest stages, where he continues to share his passion for music with audiences everywhere.",
    ],
  },
  de: {
    heading: "Biografie",
    paragraphs: [
      "Alexander Voss begann seine musikalische Ausbildung an der Royal Academy of Music in London und studierte anschliessend an der Juilliard School in New York, wo er von angesehenen Professoren wie Maria Steinberg, Richard Hartmann und Prof. Elisabeth Werner unterrichtet wurde. Derzeit setzt er sein Studium an der Universitat der Kunste Berlin unter der Leitung des renommierten Pianisten Daniel Barenboim fort.",
      "Sein Talent wurde schon fruh durch zahlreiche Auszeichnungen anerkannt, darunter mehrere erste Preise mit Hochstpunktzahl bei internationalen Wettbewerben sowie der Young Virtuoso Prize. 2016 wurde er in die \"Internationale Stiftung fur musikalische Exzellenz\" aufgenommen, wo er 2021 an einer Dokumentarproduktion teilnahm.",
      "Bedeutende Meisterkurse und die Zusammenarbeit mit renommierten Professoren wie Prof. Lang Lang, Martha Argerich und Prof. Andras Schiff gaben ihm wertvolle kunstlerische Impulse. Im Rahmen des 5. Internationalen Klavierfestivals in Wien 2024 nahm er an einem Meisterkurs mit dem international gefeierten Pianisten Krystian Zimerman teil.",
      "2025 gewann er den ersten Preis beim Internationalen Klavierwettbewerb in Genf.",
      "Durch Stipendien der Steinway-Stiftung und derzeit der Europaischen Musikakademie hat Alexander Voss wertvolle Unterstutzung auf seinem musikalischen Weg erhalten.",
      "Seine Buhnenprasenz hat ihn zu renommierten Konzertsalen wie der Royal Albert Hall, Carnegie Hall, Berliner Philharmonie, dem Wiener Musikverein und der Sydney Opera House gefuhrt. Wahrend der \"European Young Talents Tour\" begeisterte er Publikum in ganz Europa mit Konzerten an renommierten Orten wie dem Teatro La Fenice in Venedig und dem Concertgebouw in Amsterdam.",
      "Innovative Perspektive, Entschlossenheit und aussergewohnliches musikalisches Talent fuhren den jungen Musiker naturlich zu den besten Buhnen der Welt, wo er seine Leidenschaft fur Musik mit Publikum uberall teilt.",
    ],
  },
  ru: {
    heading: "Биография",
    paragraphs: [
      "Александр Фосс начал своё музыкальное образование в Королевской академии музыки в Лондоне и продолжил учёбу в Джульярдской школе в Нью-Йорке, где учился у выдающихся профессоров, включая Марию Штайнберг, Ричарда Хартманна и профессора Элизабет Вернер. В настоящее время он продолжает своё обучение в Берлинском университете искусств под руководством известного пианиста Даниэля Баренбойма.",
      "Его талант был признан с раннего возраста благодаря многочисленным наградам, включая несколько первых премий с максимальными баллами на международных конкурсах и премию Young Virtuoso. В 2016 году он был принят в \"Международный фонд музыкального мастерства\", где участвовал в документальной съёмке в 2021 году.",
      "Значительные мастер-классы и сотрудничество с известными профессорами, такими как профессор Ланг Ланг, Марта Аргерих и профессор Андраш Шифф, обогатили его художественный опыт. В рамках 5-го Международного фортепианного фестиваля в Вене в 2024 году он участвовал в мастер-классе с международно известным пианистом Кристианом Цимерманом.",
      "В 2025 году он выиграл первый приз на Международном конкурсе пианистов в Женеве.",
      "Благодаря стипендиям от фонда Steinway и в настоящее время от Европейской музыкальной академии, Александр Фосс получил ценную поддержку на своём музыкальном пути.",
      "Его сценическое присутствие привело его в престижные концертные залы, такие как Роял Альберт Холл, Карнеги-холл, Берлинская филармония, Венский музикферайн и Сиднейский оперный театр, и многие другие значительные площадки. Во время \"European Young Talents Tour\" он очаровал аудиторию по всей Европе, выступая в известных местах, таких как Театро Ла Фениче в Венеции и Концертгебау в Амстердаме.",
      "Инновационный подход, решительность и исключительный музыкальный талант естественным образом ведут молодого музыканта на лучшие мировые сцены, где он продолжает делиться своей страстью к музыке со слушателями по всему миру.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
