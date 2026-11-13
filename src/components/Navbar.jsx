import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, profile } from "../data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section for nav indicator
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080b]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Status */}
          <a
            href="#home"
            className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#e11d48] to-[#9f1239] text-white shadow-[0_0_20px_rgba(225,29,72,0.4)]">
              <span className="font-display font-bold text-sm tracking-wider">
                {profile.initials}
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fb7185] opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#07080b] bg-[#e11d48]"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-white group-hover:text-[#fb7185] transition-colors">
                {profile.name}
              </span>
              <span className="hidden sm:inline font-mono text-[10px] text-[#94a3b8] tracking-widest uppercase">
                Python & Django Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#0d0f15]/80 p-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-200 ${
                      isActive
                        ? "bg-[#e11d48] text-white font-medium shadow-[0_0_12px_rgba(225,29,72,0.5)]"
                        : "text-[#94a3b8] hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-[#0d0f15] text-[#94a3b8] transition-all hover:border-[#e11d48]/60 hover:text-white hover:shadow-[0_0_15px_rgba(225,29,72,0.3)]"
            >
              <FiGithub size={16} />
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#e11d48] to-[#be123c] px-4 py-2 font-mono text-xs font-semibold text-white shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all hover:shadow-[0_0_30px_rgba(225,29,72,0.7)] hover:scale-[1.02]"
            >
              <span>Let's Talk</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-[#0d0f15]/90 text-white transition-colors hover:border-[#e11d48] md:hidden"
          >
            {isOpen ? <HiX size={22} className="text-[#fb7185]" /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] border-b border-white/[0.1] bg-[#07080b]/95 py-6 backdrop-blur-2xl shadow-2xl transition-all">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <ul className="flex flex-col gap-2 font-mono text-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 transition-colors ${
                        isActive
                          ? "bg-[#e11d48]/15 border border-[#e11d48]/40 text-[#fb7185] font-semibold"
                          : "text-[#94a3b8] hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-[#e11d48]">/ /</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-col gap-3 border-t border-white/[0.08] pt-5">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#be123c] py-3 text-center font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(225,29,72,0.4)]"
              >
                <span>Get In Touch</span>
                <span>→</span>
              </a>

              {/* Quick Social Buttons on mobile */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-[#101218] text-[#94a3b8] hover:text-white hover:border-[#e11d48]"
                  aria-label="GitHub"
                >
                  <FiGithub size={16} />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-[#101218] text-[#94a3b8] hover:text-white hover:border-[#e11d48]"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={16} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-[#101218] text-[#94a3b8] hover:text-white hover:border-[#e11d48]"
                  aria-label="Email"
                >
                  <FiMail size={16} />
                </a>
                <a
                  href={`https://wa.me/${profile.social.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1] bg-[#101218] text-[#94a3b8] hover:text-white hover:border-[#e11d48]"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
