import React from "react";
import { useTranslation } from "react-i18next";

const UsersPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-3xl font-bold text-primary">{t("Users Page")}</h2>
    </div>
  );
};

export default UsersPage;
