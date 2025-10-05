import { Ellipsis } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Order } from "../../types";

interface TableProps {
  orders: Order[];
}

const getStatusStyle = (status: Order["status"]): string => {
  switch (status) {
    case "Processing":
      return "bg-[#FF6E40]";
    case "Shipped":
      return "bg-[#293134]";
    case "Completed":
      return "bg-[#05B171]";
    case "Refunded":
      return "bg-[#FAAE42]";
    case "Cancelled":
      return "bg-[#EA4444]";
    default:
      return "bg-secondary";
  }
};

function Tabel({ orders }: TableProps) {
  const { t } = useTranslation();
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-separate border-spacing-y-4 text-[#212529]">
        <thead>
          <tr className="text-sm uppercase">
            <th className="w-12 px-3 py-2">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" />
            </th>
            <th className="w-24 th-style">{t("ID")}</th>
            <th className="w-64 sm:w-72 md:w-52 th-style">{t("Name")}</th>
            <th className="w-40 sm:w-48 md:w-40 th-style">{t("Date")}</th>
            <th className="w-32 th-style">{t("Total")}</th>
            <th className="w-32 sm:w-48 md:w-32 th-style">{t("Status")}</th>
            <th className="w-16 th-style text-right">{t("Actions")}</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="text-center text-xl py-10 text-secondary"
              >
                {t("No Data Found")}
              </td>
            </tr>
          ) : (
            orders.map((order, idx) => (
              <tr key={idx} className="bg-white">
                <td className="px-3 pl-5 py-8">
                  <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                </td>
                <td className="td-style text-primary">{order.id}</td>
                <td className="td-style whitespace-nowrap">{order.name}</td>
                <td className="td-style whitespace-nowrap">{order.date}</td>
                <td className="td-style">{order.total}</td>
                <td className="td-style">
                  <span
                    className={`px-3 py-1 text-xs font-semibold text-white rounded-full whitespace-nowrap ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {t(order.status)}
                  </span>
                </td>
                <td className="px-3 py-8 pr-8 cursor-pointer">
                  <Ellipsis className="ml-auto w-4 h-4" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Tabel;
