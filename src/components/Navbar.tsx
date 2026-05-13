interface NavbarProps {
  activeSection: string;
  scrollTo: (id: string) => void;
}

export default function Navbar({ activeSection, scrollTo }: NavbarProps) {
  return (
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
  );
}
