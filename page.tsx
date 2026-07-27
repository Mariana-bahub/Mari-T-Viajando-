import CategoryPage from "@/components/CategoryPage";
import { TagIcon } from "@/components/icons";

export const metadata = { title: "Promoções | Mari Tá Viajando" };

export default function Promocoes() {
  return (
    <CategoryPage
      title="Promoções"
      description="As melhores ofertas de passagens, hospedagem e pacotes."
      icon={TagIcon}
    />
  );
}
