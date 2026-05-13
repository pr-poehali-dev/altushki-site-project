import { useState } from "react";
import Icon from "@/components/ui/icon";

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

export default function ReviewsFaqContact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  return (
    <>
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
    </>
  );
}
