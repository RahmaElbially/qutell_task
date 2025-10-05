import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-0 justify-between items-center mt-10 mb-5 text-sm">
      <div>
        <p
          className={i18n.language === "ar" ? "direction-rtl" : "direction-ltr"}
        >
          <span dir="ltr">
            &copy; 2025 JinStore -{" "}
            <span className="text-primary">BlackRise Themes</span>
          </span>
        </p>
      </div>

      <div>
        <ul className="flex items-center space-x-5 text-[#666666]">
          <li className="hover:underline">
            <a href="#">{t("Licences")}</a>
          </li>
          <li className="hover:underline">
            <a href="#">{t("Change Log")}</a>
          </li>
          <li className="hover:underline">
            <a href="#">{t("Get Help")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
