import { Logo, MenuIcon } from "@/assets";
import Link from "next/link";

const navItems = [
  { href: "/guide", title: "Guide" },
  { href: "/blog", title: "Blog" },
  { href: "/about", title: "About" },
  { href: "/privacy", title: "Privacy" },
  { href: "/terms", title: "Terms" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 border-b border-white/15 md:border-none z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="relative flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-4xl mx-auto">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div className="flex items-center space-x-3">
            <div className="inline-flex items-center justify-center size-10 border border-white/15 rounded-lg">
              <Logo className="size-8" />
            </div>
            <Link href="/" className="text-white font-semibold text-lg hidden sm:block">
              ViewDeletedReddit
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {navItems.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-white transition"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Gijela/view-deleted-reddit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition text-sm hidden sm:block"
            >
              GitHub
            </a>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
