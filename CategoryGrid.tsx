import Link from "next/link";
import { categories } from "./nav-data";

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-brand-ink/10 md:grid-cols-6 md:gap-4 md:p-5">
      {categories.map(({ label, href, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="group flex flex-col items-center gap-2 rounded-xl px-2 py-2 text-center transition hover:bg-brand-fog"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-fog text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
            <Icon className="h-5 w-5" />
          </span>
          <span className="text-xs font-medium text-brand-ink md:text-sm">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}
