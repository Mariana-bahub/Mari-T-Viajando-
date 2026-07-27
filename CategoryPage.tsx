import Header from "./Header";
import Footer from "./Footer";
import { SVGProps } from "react";

type Props = {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export default function CategoryPage({ title, description, icon: Icon }: Props) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <div className="mb-10 flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-fog text-brand-blue">
            <Icon className="h-7 w-7" />
          </span>
          <div>
            <h1 className="font-poppins text-2xl font-bold text-brand-ink md:text-3xl">
              {title}
            </h1>
            <p className="mt-1 text-sm text-brand-ink/60">{description}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-brand-ink/15 bg-brand-fog/60 p-10 text-center text-brand-ink/50">
          Conteúdo em construção — os primeiros posts de {title.toLowerCase()}{" "}
          aparecerão aqui.
        </div>
      </main>
      <Footer />
    </>
  );
}
