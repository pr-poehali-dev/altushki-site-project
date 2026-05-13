import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7440a03d-ab9a-4667-b788-8502ba32fa11/files/33b7c155-a485-4b39-9660-21fb0e2a5814.jpg";

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

const REVIEWS = [
  {
    name: "Анастасия К.",
    role: "Frontend-разработчик",
    text: "Прошла курс по веб-разработке и уже через 2 месяца получила первый оффер. Преподаватели всегда на связи, материал понятный.",
    rating: 5,
    avatar: "А",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Михаил Р.",
    role: "Data Analyst",
    text: "Курс по Data Science превзошёл все ожидания. Реальные проекты, актуальные технологии. Теперь работаю в IT-компании.",
    rating: 5,
    avatar: "М",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Елена В.",
    role: "UX Designer",
    text: "До курса вообще не знала Figma. Сейчас работаю дизайнером на фрилансе. Огромная благодарность преподавателям!",
    rating: 5,
    avatar: "Е",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Дмитрий С.",
    role: "SMM-специалист",
    text: "Отличный курс по маркетингу. Сразу же применил знания на практике — продажи выросли в 3 раза за месяц.",
    rating: 5,
    avatar: "Д",
    color: "from-green-500 to-teal-500",
  },
];

const FAQS = [
  {
    q: "Нужны ли предварительные знания для обучения?",
    a: "Большинство наших курсов начинаются с нулевого уровня. Для продвинутых курсов мы указываем необходимые требования на странице курса.",
  },
  {
    q: "Как долго доступны материалы курса?",
    a: "После оплаты вы получаете бессрочный доступ ко всем материалам курса, включая обновления и новые уроки.",
  },
  {
    q: "Есть ли сертификат по окончании?",
    a: "Да, после успешного завершения курса и выполнения финального проекта вы получаете именной сертификат.",
  },
  {
    q: "Можно ли получить возврат средств?",
    a: "В течение 7 дней с момента покупки мы гарантируем полный возврат средств без лишних вопросов.",
  },
  {
    q: "Как проходит обучение — вживую или в записи?",
    a: "Курсы сочетают записанные видео-уроки с живыми вебинарами и сессиями вопрос-ответ с преподавателями.",
  },
  {
    q: "Есть ли поддержка во время обучения?",
    a: "Каждый студент получает куратора, доступ к закрытому чату группы и возможность задать вопрос преподавателю.",
  },
];

const CATEGORIES = ["Все", "Программирование", "Дизайн", "Маркетинг"];
const LEVELS = ["Все уровни", "Начинающий", "Средний", "Продвинутый"];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [filterCategory, setFilterCategory] = useState("Все");
  const [filterLevel, setFilterLevel] = useState("Все уровни");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredCourses = COURSES.filter((c) => {
    const catMatch = filterCategory === "Все" || c.category === filterCategory;
    const lvlMatch = filterLevel === "Все уровни" || c.level === filterLevel;
    return catMatch && lvlMatch;
  });

  return (
    <div className="min-h-screen mesh-bg font-body">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/5" style={{ background: "rgba(10,9,20,0.85)" }}>
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">E</span>
            </div>
            <span className="font-display font-bold text-xl text-white">EduPro</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: "home", label: "Главная" },
              { id: "courses", label: "Курсы" },
              { id: "reviews", label: "Отзывы" },
              { id: "faq", label: "FAQ" },
              { id: "contact", label: "Контакты" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("courses")}
            className="gradient-btn text-white text-sm font-semibold px-5 py-2 rounded-full"
          >
            Начать учиться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Более 10 000 студентов уже учатся
              </div>

              <h1 className="font-display font-black text-5xl lg:text-7xl leading-[0.95] tracking-tight text-white">
                Прокачай
                <br />
                <span className="gradient-text">свои навыки</span>
                <br />
                до максимума
              </h1>

              <p className="text-muted-foreground text-xl leading-relaxed max-w-lg">
                Практические курсы от экспертов индустрии. Учись в своём темпе и получай реальные результаты уже через месяц.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("courses")}
                  className="gradient-btn text-white font-semibold px-8 py-4 rounded-full text-lg glow-purple"
                >
                  Смотреть курсы
                </button>
                <button
                  onClick={() => scrollTo("reviews")}
                  className="flex items-center gap-2 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/5"
                >
                  <Icon name="Play" size={18} />
                  Отзывы
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                {[
                  { value: "50+", label: "Курсов" },
                  { value: "10K+", label: "Студентов" },
                  { value: "95%", label: "Довольных" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display font-black text-3xl gradient-text">{stat.value}</div>
                    <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="relative floating">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-2xl scale-110" />
                <img
                  src={HERO_IMAGE}
                  alt="Образование"
                  className="relative rounded-3xl w-full max-w-lg object-cover shadow-2xl border border-white/10"
                />
                <div className="absolute -bottom-6 -left-6 card-glow rounded-2xl px-5 py-4">
                  <div className="text-2xl mb-1">🎓</div>
                  <div className="font-display font-bold text-white text-sm">Новый курс</div>
                  <div className="text-muted-foreground text-xs">Data Science 2026</div>
                </div>
                <div className="absolute -top-6 -right-6 card-glow rounded-2xl px-5 py-4">
                  <div className="text-2xl mb-1">⭐</div>
                  <div className="font-display font-bold text-white text-sm">Рейтинг 4.9</div>
                  <div className="text-muted-foreground text-xs">1200+ отзывов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
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

      {/* REVIEWS */}
      <section id="reviews" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-4">
              Отзывы
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">
              Что говорят <span className="gradient-text">наши студенты</span>
            </h2>
            <p className="text-muted-foreground text-lg">Реальные истории успеха от реальных людей</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="card-glow rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center font-display font-bold text-white`}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{review.name}</div>
                    <div className="text-muted-foreground text-xs">{review.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
              Вопросы и ответы
            </div>
            <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">
              Часто задаваемые <span className="gradient-text">вопросы</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="card-glow rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Контакты
              </div>
              <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">
                Остались <span className="gradient-text">вопросы?</span>
              </h2>
              <p className="text-muted-foreground text-lg">Напишите нам — ответим в течение часа</p>
            </div>

            <div className="card-glow rounded-3xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Ваше имя</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="ivan@mail.ru"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Сообщение</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Расскажите, чем мы можем помочь..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <button className="w-full gradient-btn text-white font-semibold py-4 rounded-xl text-lg">
                Отправить сообщение
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-10 text-muted-foreground">
              {[
                { icon: "Mail", text: "info@edupro.ru" },
                { icon: "Phone", text: "+7 (800) 555-35-35" },
                { icon: "MapPin", text: "Москва, Россия" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm">
                  <Icon name={item.icon} size={16} className="text-primary" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-btn flex items-center justify-center">
              <span className="text-white font-display font-bold text-xs">E</span>
            </div>
            <span className="font-display font-bold text-white">EduPro</span>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            © 2026 EduPro. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <button className="hover:text-white transition-colors">Политика конфиденциальности</button>
            <button className="hover:text-white transition-colors">Оферта</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
