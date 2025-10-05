import React from "react";
import { useTranslation } from "react-i18next";

const CartPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-primary">{t("Cart Page")}</h2>
    </div>
  );
};

export default CartPage;
