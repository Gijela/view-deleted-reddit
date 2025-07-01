import { Logo, SocialX } from "@/assets";
import Link from "next/link";

const navItems = [
  { href: "/guide", title: "Guide" },
  { href: "/about", title: "About" },
  { href: "/privacy", title: "Privacy" },
  { href: "/terms", title: "Terms" },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="size-6" />
            <span className="font-medium">ViewDeletedReddit</span>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            {navItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end items-center">
            <a
              href="https://github.com/Gijela/view-deleted-reddit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition text-sm"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@viewdeletedreddit.com"
              className="text-white/40 hover:text-white transition text-sm"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} ViewDeletedReddit. Free tool to view deleted Reddit posts and comments.
            </p>
            <p className="text-white/50 text-sm">
              Made with ❤️ for the Reddit community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
