import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../components/ui/BreadCrumb";
import Footer from "../components/layout/Footer";

const DashboardLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen items-stretch bg-[#F5F4FE] overflow-x-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="flex-1 p-6 flex flex-col min-h-screen overflow-x-hidden">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <BreadCrumb />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default DashboardLayout;
