import CategoryPage from "@/components/CategoryPage";
import { PlaneIcon } from "@/components/icons";

export const metadata = { title: "Passagens | Mari Tá Viajando" };

export default function Passagens() {
  return (
    <CategoryPage
      title="Passagens"
      description="Promoções e dicas para achar as passagens mais baratas."
      icon={PlaneIcon}
    />
  );
}
