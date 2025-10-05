import Logo from "../../assets/Logo.svg";
import authIcon from "../../assets/auth-icon.svg";
import buyerIcon from "../../assets/buyer-icon.svg";
import chatsIcon from "../../assets/chats-icon.svg";
import customerIcon from "../../assets/customer-icon.svg";
import dashboardIcon from "../../assets/dashboard-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import errorsIcon from "../../assets/errors-icon.svg";
import ordersIcon from "../../assets/orders-icon.svg";
import productsIcon from "../../assets/products-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import todoIcon from "../../assets/todo-icon.svg";
import usersIcon from "../../assets/users-icon.svg";
import { useState } from "react";
import SidebarSection from "./SidebarSection";
import { useLocation } from "react-router-dom";

const ECommerceItems = [
  { title: "Dashboard", icon: dashboardIcon, url: "/" },
  {
    title: "Orders",
    icon: ordersIcon,
    url: "/orders",
    subItems: [
      { title: "List", url: "/orders/list" },
      { title: "Details", url: "/orders/details" },
    ],
  },
  {
    title: "Products",
    icon: productsIcon,
    url: "/products",
    subItems: [
      { title: "List View", url: "/products/list" },
      { title: "Grid View", url: "/products/grid" },
      { title: "Products Details", url: "/products/details" },
      { title: "Shopping Cart", url: "/products/cart" },
      { title: "Checkout", url: "/products/checkout" },
    ],
  },
  { title: "Buyer", icon: buyerIcon, url: "/buyer" },
  { title: "Customers", icon: customerIcon, url: "/customers" },
  { title: "Invoices", icon: ordersIcon, url: "/invoices" },
];

const appItems = [
  { title: "Chats", icon: chatsIcon, url: "/chats" },
  { title: "Email", icon: emailIcon, url: "/emails" },
  { title: "Todo App", icon: todoIcon, url: "/todos" },
];

const pagesItems = [
  { title: "Profile", icon: profileIcon, url: "/profile" },
  { title: "Users", icon: usersIcon, url: "/users" },
  { title: "Authentication", icon: authIcon, url: "/auth" },
  { title: "Error Pages", icon: errorsIcon, url: "/error" },
];

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isOpen }: SidebarProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const { pathname } = useLocation();
  const isProductPage = pathname.startsWith("/products");

  return (
    <aside
      className={`
                transition-all duration-300 z-40 p-6 
                ${
                  isOpen
                    ? "fixed top-20 left-0 w-full h-[calc(100vh-4rem)] overflow-y-auto bg-white"
                    : "hidden"
                }
                ${isProductPage && "top-40 md:top-20"} 
                lg:static lg:block lg:w-96 lg:min-h-screen lg:overflow-visible 
                `}
    >
      <img src={Logo} alt="Logo" />

      <div className="mt-8 flex items-center space-x-3 bg-white p-5 rounded-b-xl">
        <div className="w-12 h-12 rounded-full bg-black text-white text-center text-2xl leading-12 font-semibold">
          B
        </div>
        <div>
          <h2 className="font-bold text-primary">Shawon Farabi</h2>
          <p className="text-secondary">Sales Manager</p>
        </div>
      </div>

      <nav className="mt-5">
        <SidebarSection
          title={"E-Commerce"}
          items={ECommerceItems}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
        <SidebarSection
          title={"Apps"}
          items={appItems}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
        <SidebarSection
          title={"Pages"}
          items={pagesItems}
          openItem={openItem}
          setOpenItem={setOpenItem}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;

/*
 className={`
                transition-all duration-300 z-40 p-6 col-span-3
                ${
                  isOpen
                    ? "fixed top-20 left-0 col-span-12 h-[calc(100vh-4rem)] overflow-y-auto bg-white"
                    : "hidden"
                }
                ${isProductPage && "top-40 md:top-20"} 
                lg:static lg:block lg:w-96 lg:min-h-screen lg:overflow-visible 
                `}
*/
