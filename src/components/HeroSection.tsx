import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7440a03d-ab9a-4667-b788-8502ba32fa11/files/33b7c155-a485-4b39-9660-21fb0e2a5814.jpg";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
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
  );
}
