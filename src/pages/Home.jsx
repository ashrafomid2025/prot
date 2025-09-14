import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skill from "../components/Skill";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <ThemeToggle />
      {/* background effect */}
      <StarBackground />

      {/* navbar */}
      <Navbar />

      {/* main content */}
      <main>
        <Hero />
        <About />
        {/* <Skills /> */}
        <Skill />
        <Projects />
        <Contact />
      </main>

      {/* footer */}
    </div>
  );
};
