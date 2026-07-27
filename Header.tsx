import Link from "next/link";
import Logo from "./Logo";
import { SearchIcon } from "./icons";
import { categories } from "./nav-data";

export default function Header() {
  return (
    <header className="bg-brand-gradient sticky top-0 z-30 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 md:px-8">
        <Logo variant="dark" />
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/90 lg:flex">
          <Link href="/" className="hover:text-white">
            Início
          </Link>
          {categories.map((c) => (
            <Link key={c.href} href={c.href} className="hover:text-white">
              {c.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Buscar"
          className="rounded-full p-2 text-white/90 transition hover:bg-white/15 hover:text-white"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
