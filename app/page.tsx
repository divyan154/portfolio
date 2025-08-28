import AboutSection from "@/sections/AboutSection";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  );
}
