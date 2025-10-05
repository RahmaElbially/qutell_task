import React, { useState } from "react";
import TableToolbar from "../../../components/ui/TableToolbar";
import FiltersSidebar from "../../../components/ui/FiltersSidebar";
import Pagination from "../../../components/shared/Pagination";
import { useTranslation } from "react-i18next";
import ProductGrid from "../../../components/ui/ProductGrid";
import product1Image from "../../../assets/product1.png";
import product2Image from "../../../assets/product2.png";
import product3Image from "../../../assets/product3.png";
import product4Image from "../../../assets/product4.png";
import product5Image from "../../../assets/product5.png";
import product6Image from "../../../assets/product6.png";
import type { Product } from "../../../types";

const initialPrducts: Product[] = [
  {
    image: product1Image,
    title: "Simply Orange Pulp Free Juice - 52 fl oz",
    price: "$499,90",
    oldPrice: "$800",
    rating: 4,
    reviews: 25,
    inCart: false,
    cartCount: 0,
    isFavorite: false,
  },
  {
    image: product2Image,
    title: "Lay's Classic Potato Snack Chips, Party Size, 13 oz Bag",
    price: "$1.190,90",
    rating: 5,
    reviews: 10,
    inCart: false,
    cartCount: 0,
    isFavorite: false,
  },
  {
    image: product3Image,
    title: "Oscar Mayer Ham & Swiss Melt Scrambler - 3oz",
    price: "$1.599,00",
    rating: null,
    inCart: true,
    cartCount: 2,
    isFavorite: true,
  },
  {
    image: product4Image,
    title: "Large Garden Spinach & Herb Wrap Tortillas - 15oz_6ct",
    price: "$10,00",
    rating: null,
    inCart: false,
    cartCount: 0,
    isFavorite: false,
  },
  {
    image: product5Image,
    title: "Great Value Rising Crust Frozen Pizza, Supreme",
    price: "$30,00",
    rating: 4,
    reviews: 5,
    inCart: false,
    cartCount: 0,
    isFavorite: false,
  },
  {
    image: product6Image,
    title: "Real Plant-Powered Protein Shake - Double Chocolate",
    price: "$25,00",
    rating: 3,
    reviews: 8,
    inCart: false,
    cartCount: 0,
    isFavorite: true,
  },
];

const GridPage: React.FC = () => {
  const { t } = useTranslation();

  const [products] = useState<Product[]>(initialPrducts);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(initialPrducts);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleSort = (sortBy: string) => {
    let sortProducts = [...filteredProducts];

    switch (sortBy) {
      case "name":
        sortProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "date":
        break;
      case "price":
        sortProducts.sort(
          (a, b) =>
            parseFloat(a.price.replace("$", "").replace(",", ".")) -
            parseFloat(b.price.replace("$", "").replace(",", "."))
        );
        break;
      default:
        break;
    }
    setFilteredProducts(sortProducts);
  };

  const handleItemsPerPage = (value: string) => {
    setItemsPerPage(Number(value));
  };

  const handleReset = () => {
    setFilteredProducts(products);
    setItemsPerPage(5);
    setCurrentPage(1);
  };

  const handleDeleteAll = () => {
    setFilteredProducts([]);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <main className="col-span-12 md:col-span-8 flex flex-col gap-6 order-2 md:order-1">
          <TableToolbar
            title="All Products"
            showSearch={false}
            onSortChange={handleSort}
            onItemsChange={handleItemsPerPage}
            onActionChange={() => {}}
            onReset={handleReset}
            onDelete={handleDeleteAll}
          />
          <ProductGrid products={currentProducts} />
          <Pagination
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </main>

        <aside className="col-span-12 md:col-span-4 order-1 md:order-2">
          <h2 className="mb-5 font-medium text-lg">{t("Filter Products")}</h2>
          <FiltersSidebar />
        </aside>
      </div>
    </>
  );
};

export default GridPage;
