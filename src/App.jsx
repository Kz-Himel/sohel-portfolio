import { useState, useEffect } from "react";
import SceneBackground from "./components/SceneBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HiOutlineArrowUp } from "react-icons/hi";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#07080b] bg-grid-crimson selection:bg-[#e11d48] selection:text-white">
      {/* 3D Constellation and Ambient Glows */}
      <SceneBackground />

      {/* Main Header */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button for mobile & desktop */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.12] bg-[#0d0f15]/90 text-white shadow-[0_0_20px_rgba(225,29,72,0.35)] backdrop-blur-md transition-all hover:border-[#e11d48] hover:bg-[#e11d48] hover:scale-110 active:scale-95"
        >
          <HiOutlineArrowUp size={18} />
        </button>
      )}
    </div>
  );
}

export default App;
