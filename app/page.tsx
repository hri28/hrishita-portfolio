import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RightSideNav from "@/components/RightSideNav";
import MobileNav from "@/components/MobileNav";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero already animates – leave it as is */}
      <Hero />

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn delay={0.05}>
        <Experience />
      </FadeIn>

      <FadeIn delay={0.08}>
        <Projects />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Contact />
      </FadeIn>

      <RightSideNav />
      <MobileNav />
    </main>
  );
}
