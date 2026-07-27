import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/CategoryGrid";
import { PinIcon } from "@/components/icons";

const destinos = [
  {
    nome: "Fernando de Noronha",
    imagem:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
    tag: "Praia",
  },
  {
    nome: "Gramado, RS",
    imagem:
      "https://images.unsplash.com/photo-1601921004897-b7d582749d05?q=80&w=800&auto=format&fit=crop",
    tag: "Serra",
  },
  {
    nome: "Chapada Diamantina",
    imagem:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    tag: "Aventura",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop"
              alt="Praia paradisíaca com águas azul-turquesa"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-blue/40 to-brand-cyan/20" />
          </div>

          <div className="relative mx-auto flex min-h-[420px] max-w-6xl flex-col justify-center px-4 py-16 md:px-8 md:py-24">
            <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <PinIcon className="h-3.5 w-3.5 text-brand-yellow" />
              Dicas atualizadas toda semana
            </span>
            <h1 className="max-w-xl font-poppins text-3xl font-bold leading-tight text-white md:text-5xl">
              Seu próximo destino começa aqui!
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/90 md:text-base">
              Dicas, roteiros e promoções para você viajar mais gastando
              menos.
            </p>
            <a
              href="/destinos"
              className="mt-6 w-fit rounded-lg bg-brand-yellow px-6 py-3 text-sm font-semibold text-brand-ink shadow-lg transition hover:brightness-95"
            >
              VER DESTINOS
            </a>
          </div>

          <div className="relative mx-auto -mt-8 max-w-6xl px-4 pb-10 md:px-8">
            <CategoryGrid />
          </div>
        </section>

        {/* DESTINOS EM DESTAQUE */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-poppins text-2xl font-bold text-brand-ink md:text-3xl">
                Destinos em destaque
              </h2>
              <p className="mt-1 text-sm text-brand-ink/60">
                Roteiros testados para gastar menos e aproveitar mais.
              </p>
            </div>
            <a
              href="/destinos"
              className="hidden text-sm font-semibold text-brand-blue hover:underline md:block"
            >
              Ver todos →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {destinos.map((d) => (
              <article
                key={d.nome}
                className="group overflow-hidden rounded-2xl bg-white shadow-md shadow-brand-ink/5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={d.imagem}
                    alt={d.nome}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-yellow px-3 py-1 text-xs font-semibold text-brand-ink">
                    {d.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-brand-ink">{d.nome}</h3>
                  <a
                    href="/destinos"
                    className="mt-2 inline-block text-sm text-brand-blue hover:underline"
                  >
                    Ver roteiro
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* NEWSLETTER / SLOGAN */}
        <section className="bg-brand-fog py-16">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
            <p className="font-pacifico text-2xl text-brand-blue md:text-3xl">
              Viaje mais.{" "}
              <span className="text-brand-cyan">Gaste menos.</span>
            </p>
            <p className="mt-3 text-sm text-brand-ink/70">
              Receba as melhores promoções de passagens e hotéis direto no
              seu e-mail.
            </p>
            <form className="mx-auto mt-6 flex max-w-md gap-2">
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                className="w-full rounded-lg border border-brand-ink/10 bg-white px-4 py-3 text-sm outline-none ring-brand-blue focus:ring-2"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Quero receber
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
