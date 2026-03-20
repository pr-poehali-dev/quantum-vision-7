interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About the Master",
    paragraphs: [
      "Evgenia Murashkina is a bone carving master with over 10 years of experience in creating miniature sculptures and netsuke — the traditional Japanese art of intricate figurine carving.",
      "Her works are distinguished by exceptional attention to detail: each piece is carefully carved, tinted, and finished by hand. Evgenia masterfully works with various stylistic directions — from classical Japanese netsuke to author's compositions in contemporary style.",
      "A hallmark of Evgenia's art is her ability to convey emotion and warmth in stone-like material. Her signature genre is compositions featuring children and animals — tender, lively scenes that seem to breathe with life.",
      "Among the techniques she employs: fine detailing with micro-tools, inlay work with precious metals and stones, multi-layer tinting that gives depth and antiquity to each piece, as well as unique surface texturing.",
      "Every sculpture by Evgenia Murashkina is a unique work of art, created for true connoisseurs of handcraft and traditional carving culture.",
    ],
  },
  de: {
    heading: "Uber die Meisterin",
    paragraphs: [
      "Evgenia Murashkina ist eine Knochenschnitzmeisterin mit uber 10 Jahren Erfahrung in der Schaffung von Miniaturskulpturen und Netsuke — der traditionellen japanischen Kunst des Figurenschnitzens.",
      "Ihre Werke zeichnen sich durch aussergewohnliche Liebe zum Detail aus: Jedes Stuck wird sorgfaltig von Hand geschnitzt, getont und fertiggestellt. Evgenia arbeitet meisterhaft in verschiedenen Stilrichtungen — vom klassischen japanischen Netsuke bis hin zu eigenen Kompositionen im zeitgenossischen Stil.",
      "Ein Markenzeichen von Evgenias Kunst ist ihre Fahigkeit, Emotionen und Warme in einem steinahnlichen Material zu vermitteln. Ihr bevorzugtes Genre sind Kompositionen mit Kindern und Tieren — zarte, lebendige Szenen, die zu atmen scheinen.",
      "Zu den von ihr angewandten Techniken gehoren: Feindetaillierung mit Mikrowerkzeugen, Einlegearbeiten mit Edelmetallen und Steinen, mehrschichtige Tonung, die jedem Stuck Tiefe und Antike verleiht, sowie einzigartige Oberflachentexturierung.",
      "Jede Skulptur von Evgenia Murashkina ist ein einzigartiges Kunstwerk, das fur echte Kenner des Handwerks und der traditionellen Schnitzkultur geschaffen wurde.",
    ],
  },
  ru: {
    heading: "О мастере",
    paragraphs: [
      "Евгения Мурашкина — мастер резьбы по кости с более чем 10-летним опытом создания миниатюрных скульптур и нэцкэ — традиционного японского искусства изысканной резьбы фигурок.",
      "Её работы отличает исключительное внимание к деталям: каждое изделие тщательно вырезается, тонируется и обрабатывается вручную. Евгения мастерски работает в различных стилистических направлениях — от классических японских нэцкэ до авторских композиций в современном духе.",
      "Визитной карточкой творчества Евгении стало умение передать эмоцию и теплоту в казалось бы холодном материале. Её коронный жанр — композиции с детьми и животными: нежные, живые сценки, которые словно дышат.",
      "Среди применяемых техник: тонкая проработка деталей микроинструментом, инкрустация драгоценными металлами и камнями, многослойная тонировка, придающая каждой работе глубину и налёт старины, а также уникальная фактурная обработка поверхности.",
      "Каждая скульптура Евгении Мурашкиной — это уникальное произведение искусства, созданное для истинных ценителей ручного мастерства и культуры традиционной резьбы.",
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