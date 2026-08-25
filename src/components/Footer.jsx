import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile } from "../data/siteData";

const socialLinks = [
  { icon: FaFacebookF, href: profile.social.facebook, label: "Facebook" },
  { icon: FaLinkedinIn, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: FaGithub, href: profile.social.github, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-text">
            {profile.name}
          </p>
          <p className="font-mono text-xs text-text-muted">{profile.title}</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-text-muted/70">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
