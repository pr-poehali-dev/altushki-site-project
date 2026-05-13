import { useState } from "react";
import Icon from "@/components/ui/icon";

const COURSES = [
  {
    id: 1,
    title: "Python с нуля до Pro",
    description: "Освоите программирование на Python: от основ до создания реальных проектов и автоматизации задач.",
    level: "Начинающий",
    levelColor: "text-green-400 bg-green-400/10 border-green-400/20",
    price: 4990,
    oldPrice: 7990,
    duration: "3 месяца",
    lessons: 48,
    emoji: "🐍",
    category: "Программирование",
  },
  {
    id: 2,
    title: "UI/UX Дизайн",
    description: "Научитесь проектировать современные интерфейсы в Figma. Портфолио из 5 проектов в подарок.",
    level: "Начинающий",
    levelColor: "text-green-400 bg-green-400/10 border-green-400/20",
    price: 5990,
    oldPrice: 9990,
    duration: "2 месяца",
    lessons: 36,
    emoji: "🎨",
    category: "Дизайн",
  },
  {
    id: 3,
    title: "Веб-разработка Full Stack",
    description: "HTML, CSS, JavaScript, React и Node.js. Станьте востребованным full-stack разработчиком.",
    level: "Средний",
    levelColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    price: 8990,
    oldPrice: 14990,
    duration: "5 месяцев",
    lessons: 80,
    emoji: "💻",
    category: "Программирование",
  },
  {
    id: 4,
    title: "SMM и продвижение",
    description: "Стратегии контент-маркетинга, таргетинг, аналитика и продвижение в социальных сетях.",
    level: "Начинающий",
    levelColor: "text-green-400 bg-green-400/10 border-green-400/20",
    price: 3990,
    oldPrice: 5990,
    duration: "6 недель",
    lessons: 24,
    emoji: "📱",
    category: "Маркетинг",
  },
  {
    id: 5,
    title: "Data Science и ML",
    description: "Машинное обучение, нейронные сети и анализ данных. Для тех, кто хочет работать с ИИ.",
    level: "Продвинутый",
    levelColor: "text-red-400 bg-red-400/10 border-red-400/20",
    price: 12990,
    oldPrice: 19990,
    duration: "6 месяцев",
    lessons: 96,
    emoji: "🤖",
    category: "Программирование",
  },
  {
    id: 6,
    title: "Интернет-маркетинг",
    description: "SEO, контекстная реклама, email-маркетинг и аналитика для роста вашего бизнеса.",
    level: "Средний",
    levelColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    price: 6990,
    oldPrice: 10990,
    duration: "3 месяца",
    lessons: 52,
    emoji: "📊",
    category: "Маркетинг",
  },
];

const CATEGORIES = ["Все", "Программирование", "Дизайн", "Маркетинг"];
const LEVELS = ["Все уровни", "Начинающий", "Средний", "Продвинутый"];

export default function CoursesSection() {
  const [filterCategory, setFilterCategory] = useState("Все");
  const [filterLevel, setFilterLevel] = useState("Все уровни");

  const filteredCourses = COURSES.filter((c) => {
    const catMatch = filterCategory === "Все" || c.category === filterCategory;
    const lvlMatch = filterLevel === "Все уровни" || c.level === filterLevel;
    return catMatch && lvlMatch;
  });

  return (
    <section id="courses" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Каталог курсов
          </div>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">
            Найди свой <span className="gradient-text">идеальный курс</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Все курсы разработаны практиками индустрии и регулярно обновляются
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  filterCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="h-6 border-l border-white/10 hidden sm:block self-center mx-2" />
          <div className="flex flex-wrap gap-2">
            {LEVELS.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilterLevel(lvl)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  filterLevel === lvl
                    ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/40"
                    : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-white"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="card-glow rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <span className="text-4xl">{course.emoji}</span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${course.levelColor}`}>
                  {course.level}
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{course.description}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icon name="Clock" size={12} />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="BookOpen" size={12} />
                  {course.lessons} уроков
                </span>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div>
                  <span className="font-display font-black text-2xl text-white">
                    {course.price.toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="text-muted-foreground text-sm line-through ml-2">
                    {course.oldPrice.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <button className="gradient-btn text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <div className="text-4xl mb-4">🔍</div>
            <p>Курсы по выбранным фильтрам не найдены</p>
          </div>
        )}
      </div>
    </section>
  );
}
