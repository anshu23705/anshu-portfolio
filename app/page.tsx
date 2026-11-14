
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#332D27]">

      <Navbar />

      <Hero />

      <About />
      <Education />
      <Skills />

      <Experience />

      <Projects />
      <Resume/>
      <Contact />

    </main>
  );
}
