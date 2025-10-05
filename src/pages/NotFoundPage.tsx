import React from "react";
import { useTranslation } from "react-i18next";
import notFound from "../assets/not-found.gif";

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-16 items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-primary">{t("NotFound Page")}</h2>
      <img src={notFound} alt="Not Found Image" className="rounded-2xl" />
    </div>
  );
};

export default NotFoundPage;
