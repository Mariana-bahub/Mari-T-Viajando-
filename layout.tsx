import type { Metadata } from "next";
import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mari Tá Viajando | Viaje mais. Gaste menos.",
  description:
    "Dicas, roteiros e promoções de passagens, hotéis, bate-voltas e destinos para você viajar mais gastando menos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${pacifico.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
