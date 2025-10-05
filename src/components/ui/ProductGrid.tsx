import { useTranslation } from "react-i18next";
import type { Product } from "../../types";
import ProductCard from "../shared/ProductCard";

interface ProductGridProbs {
  products: Product[];
}

function ProductGrid({ products }: ProductGridProbs) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-12 gap-5">
      {products.length === 0 ? (
        <h2 className="col-span-12 text-center text-xl py-10 text-secondary">
          {t("No Data Found")}
        </h2>
      ) : (
        products.map((product, i) => <ProductCard key={i} {...product} />)
      )}
    </div>
  );
}

export default ProductGrid;
