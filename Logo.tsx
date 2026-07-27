import Link from "next/link";

export default function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const mariColor = variant === "light" ? "text-brand-ink" : "text-white";
  const viajandoColor = variant === "light" ? "text-brand-cyan" : "text-white";

  return (
    <Link href="/" className="inline-flex flex-col leading-none select-none group">
      <span
        className={`font-pacifico text-2xl md:text-3xl ${mariColor} -rotate-2 inline-block group-hover:rotate-0 transition-transform`}
      >
        Mari
      </span>
      <span
        className={`font-pacifico text-lg md:text-xl ${viajandoColor} -mt-1 ml-3`}
      >
        Tá Viajando
      </span>
    </Link>
  );
}
