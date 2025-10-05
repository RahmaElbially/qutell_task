import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  image: string;
  title: string;
  price: string | number;
  oldPrice?: string | number;
  rating: number | null;
  reviews?: number;
  inCart: boolean;
  cartCount?: number;
  isFavorite: boolean;
}

function ProductCard({
  image,
  title,
  price,
  oldPrice,
  rating,
  reviews,
  inCart,
  cartCount,
  isFavorite,
}: ProductCardProps) {
  const totalStars = 5;
  const { t } = useTranslation();
  const [isInCart, setIsInCart] = useState<boolean>(inCart);
  const [favourite, setFavourite] = useState<boolean>(isFavorite);
  const [count, setCount] = useState<number>(cartCount || 0);
  return (
    <div className="p-4 bg-white rounded-xl col-span-12 sm:col-span-6 xl:col-span-4">
      <img
        src={image}
        alt="Product Image"
        className="w-full h-40 object-contain"
      />

      <div className="product-info flex flex-col justify-between gap-4 mt-3 h-[180px]">
        <h3 className="text-sm text-[#030712] font-medium w-52 lg:w-36 2xl:w-52 line-clamp-2">
          {title}
        </h3>

        <p className="font-medium text-lg">
          {oldPrice && (
            <span className="text-secondary line-through mr-3 font-normal text-sm">
              {oldPrice}
            </span>
          )}
          {price}
        </p>

        {rating !== null && (
          <div className="rate flex gap-1 items-center">
            {Array.from({ length: totalStars }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "text-[#FAAE42] fill-current"
                    : "text-[#6C757D] fill-current"
                }`}
              />
            ))}
            <p className="text-sm ml-1">({reviews})</p>
          </div>
        )}

        <div className="cart flex items-center justify-between">
          <button
            onClick={() => {
              setIsInCart(true);
              if (count === 0) setCount(1);
            }}
            className={`py-3 px-4 rounded-lg text-sm cursor-pointer border group ${
              isInCart
                ? "bg-[#05B171] border-[#05B171] text-white hover:bg-transparent hover:text-[#05B171]"
                : "bg-primary border-primary text-white hover:bg-transparent hover:text-primary"
            }`}
          >
            {isInCart ? t("In cart") : t("Add to cart")}
            {isInCart && (
              <span className="text-sm text-white mx-2 group-hover:text-[#05B171]">
                ({count})
              </span>
            )}
          </button>

          <Heart
            onClick={() => setFavourite(!favourite)}
            className={`w-5 h-5 cursor-pointer ${
              favourite
                ? "text-[#EA4444] fill-current"
                : "text-[#212529] hover:text-[#EA4444] hover:fill-current"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
