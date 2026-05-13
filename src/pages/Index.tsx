import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import ReviewsFaqContact from "@/components/ReviewsFaqContact";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen mesh-bg font-body">
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} />
      <CoursesSection />
      <ReviewsFaqContact />
    </div>
  );
}
