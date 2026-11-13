import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";
import { profile, navLinks } from "../data/siteData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FaGithub, href: profile.social.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: profile.social.linkedin, label: "LinkedIn" },
    { icon: FaFacebookF, href: profile.social.facebook, label: "Facebook" },
    {
      icon: FaWhatsapp,
      href: `https://wa.me/${profile.social.whatsapp.replace(/\D/g, "")}`,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080b] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12 items-start">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#e11d48] to-[#9f1239] text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]">
                <span className="font-display font-bold text-xs tracking-wider">
                  {profile.initials}
                </span>
              </div>
              <span className="font-display text-lg font-bold text-white">
                {profile.name}
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#94a3b8]">
              Full-Stack Web Developer specialized in Python, Django, RESTful microservices, and modern responsive frontends.
            </p>

            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[#94a3b8]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fb7185] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e11d48]"></span>
              </span>
              <span>Available for full-time roles &amp; remote contracts</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 font-mono text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] transition-colors hover:text-[#fb7185]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Back to Top */}
          <div className="flex flex-col items-start md:items-end">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
              Connect Online
            </p>
            
            <div className="mt-4 flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-[#0d0f15] text-[#94a3b8] transition-all hover:border-[#e11d48]/60 hover:text-white hover:shadow-[0_0_15px_rgba(225,29,72,0.3)]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#0d0f15] px-4 py-2 font-mono text-xs text-[#94a3b8] transition-all hover:border-[#e11d48]/60 hover:text-white"
            >
              <span>Back to Top</span>
              <HiOutlineArrowUp size={14} className="text-[#fb7185]" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 font-mono text-xs text-[#64748b] sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Designed with</span>
            <span className="text-[#e11d48]">♥</span>
            <span>in Crimson &amp; Obsidian</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
