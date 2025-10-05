import notification from "../../assets/notification.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CirclePlus, Globe, Menu, X } from "lucide-react";

type NavbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const { t, i18n } = useTranslation();

  const { pathname } = useLocation();
  const firstSegment = pathname.split("/")[1];
  const title = firstSegment
    ? firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1)
    : "Dashboard";

  const isProductPage = pathname.startsWith("/products");

  return (
    <div className="flex flex-col gap-5 md:flex-row items-center">
      <div className="flex items-center flex-1">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mr-3 bg-white p-1 rounded-sm cursor-pointer text-primary lg:hidden hover:bg-primary hover:text-white"
        >
          {isOpen ? (
            <Menu className="transform rotate-90 transition-all duration-150" />
          ) : (
            // <X />
            <Menu className="transition-all duration-150" />
          )}
        </div>
        <h2
          className={`font-[500] text-2xl hidden sm:block ${
            i18n.language === "ar" ? "mr-3" : "mr-0"
          }`}
        >
          {t(title)}
        </h2>
        <div className="flex flex-1 mx-8 relative">
          <img
            src={search}
            alt="Search Icon"
            className="absolute top-3 left-3 w-4 h-4"
          />
          <input
            className="bg-white outline-0 rounded-sm py-2 px-10 w-full text-secondary"
            type="text"
            placeholder={`${t("Search")}...`}
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative cursor-pointer">
          <div
            className={`w-5 h-5 rounded-full bg-[#EA4444] text-center text-white text-sm leading-5 absolute -top-3.5 ${
              i18n.language === "ar" ? "-left-2.5" : "-right-2.5"
            }`}
          >
            2
          </div>
          <img src={notification} alt="Notification Icon" className="w-6 h-6" />
        </div>
        <div className="relative cursor-pointer">
          <div
            className={`w-5 h-5 rounded-full bg-[#EA4444] text-center text-white text-sm leading-5 absolute -top-3.5 ${
              i18n.language === "ar" ? "-left-2.5" : "-right-2.5"
            }`}
          >
            3
          </div>
          <img src={cart} alt="Cart Icon" className="w-6 h-6" />
        </div>
        {isProductPage && (
          <button
            className={`
                        flex items-center bg-primary text-white py-2 px-1 sm:p-3 lg:py-2 lg:px-1 xl:p-3 rounded-md cursor-pointer
                        ${i18n.language === "ar" && "flex-row-reverse"}
                        border border-primary
                        hover:bg-transparent hover:text-primary
                        `}
          >
            <CirclePlus className="w-4 h-4 mr-3" />
            {t("Add Product")}
          </button>
        )}
        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
          }
          className="flex items-center gap-2 p-2 sm:p-3 lg:p-2 xl:p-3 rounded bg-white text-secondary border border-[#DEE2E6] hover:bg-primary hover:text-white cursor-pointer"
        >
          <Globe className="w-5 h-5" />
          <span className="text-sm font-medium uppercase">
            {i18n.language === "en" ? "EN" : "AR"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
