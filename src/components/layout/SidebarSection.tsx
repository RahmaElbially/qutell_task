import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import arrowIcon from "../../assets/arrow-icon.svg";

type SubItem = {
  title: string;
  url: string;
};

type Item = {
  title: string;
  icon: string;
  url: string;
  subItems?: SubItem[];
};

type SidebarSectionProps = {
  title: string;
  items: Item[];
  openItem: string | null;
  setOpenItem: React.Dispatch<React.SetStateAction<string | null>>;
};

const SidebarSection = ({
  title,
  items,
  openItem,
  setOpenItem,
}: SidebarSectionProps) => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className="mb-10">
      <div className="flex items-center space-x-3 my-5 text-secondary">
        <div className="w-2 h-2 bg-secondary rounded-full"></div>
        <p className="text-sm">{t(title)}</p>
      </div>

      {items.map((item) => {
        return (
          <div key={t(item.title)}>
            <NavLink
              to={item.url}
              end
              onClick={(e) => {
                if (item.subItems) {
                  e.preventDefault();
                  setOpenItem(
                    openItem === t(item.title) ? null : t(item.title)
                  );
                }
              }}
              className={({ isActive }) =>
                `group flex items-center w-full p-3 rounded-4xl ${
                  isActive ? "bg-primary text-white" : "text-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img src={item.icon} alt="Item Icon" className="mr-4" />
                  {t(item.title)}

                  {t(item.title) === t("Chats") ? (
                    <div
                      className={`
                                  w-7 h-7 rounded-full text-center leading-7 text-sm 
                                  ${
                                    isActive
                                      ? pathname.startsWith("/products")
                                        ? "bg-white text-[#05B171]"
                                        : "bg-white text-primary"
                                      : pathname.startsWith("/products")
                                      ? "bg-[#05B171] text-white"
                                      : "bg-primary text-white"
                                  }
                                  ${
                                    i18n.language === "ar"
                                      ? "mr-auto"
                                      : "ml-auto"
                                  }
                              `}
                    >
                      2
                    </div>
                  ) : (
                    t(item.title) !== t("Dashboard") &&
                    t(item.title) !== t("Customers") && (
                      <img
                        src={arrowIcon}
                        alt="Arrow Icon"
                        className={`ml-4 ${
                          i18n.language === "ar" ? "arrow-flip" : "arrow-normal"
                        }`}
                      />
                    )
                  )}
                </>
              )}
            </NavLink>

            {/* Sub Items */}
            {item.subItems && openItem === t(item.title) && (
              <div className="space-y-1">
                {item.subItems.map((sub) => (
                  <NavLink
                    to={sub.url}
                    key={t(sub.title)}
                    className={({ isActive }) =>
                      `block w-full pl-12 p-3 rounded-4xl ${
                        isActive ? "bg-primary text-white" : "text-black"
                      }`
                    }
                  >
                    {t(sub.title)}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarSection;
