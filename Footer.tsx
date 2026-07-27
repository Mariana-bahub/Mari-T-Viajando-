import Logo from "./Logo";
import { categories } from "./nav-data";

export default function Footer() {
  return (
    <footer className="mt-20 bg-brand-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 max-w-xs font-pacifico text-lg text-brand-yellow">
            Viaje mais. Gaste menos.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Explorar</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="hover:text-white">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Mari Tá Viajando</h3>
          <p className="text-sm">
            Dicas de viagens, passagens, hotéis, bate-voltas e roteiros
            incríveis.
          </p>
          <p className="mt-2 text-sm">maritaviajando.com.br</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Mari Tá Viajando. Todos os direitos reservados.
      </div>
    </footer>
  );
}
