import React, { useState } from "react";
import TableToolbar from "../../../components/ui/TableToolbar";
import Table from "../../../components/ui/Table";
import Pagination from "../../../components/shared/Pagination";
import type { Order } from "../../../types";

const initalOrders: Order[] = [
  {
    id: "#3210",
    name: "Cortie Gemson",
    date: "May 23, 2021",
    total: "$239,00",
    status: "Processing",
  },
  {
    id: "#3210",
    name: "Mathilde Tumilson",
    date: "May 15, 2021",
    total: "$650,50",
    status: "Shipped",
  },
  {
    id: "#3210",
    name: "Audrye Heaford",
    date: "Apr 24, 2021",
    total: "$100,00",
    status: "Completed",
  },
  {
    id: "#3210",
    name: "Brantley Mell",
    date: "Apr 10, 2021",
    total: "$19",
    status: "Refunded",
  },
  {
    id: "#3210",
    name: "Dominique Enriques",
    date: "March 5, 2021",
    total: "$150,00",
    status: "Cancelled",
  },

  {
    id: "#3210",
    name: "Cortie Gemson",
    date: "May 23, 2021",
    total: "$239,00",
    status: "Processing",
  },
  {
    id: "#3210",
    name: "Mathilde Tumilson",
    date: "May 15, 2021",
    total: "$650,50",
    status: "Shipped",
  },
  {
    id: "#3210",
    name: "Audrye Heaford",
    date: "Apr 24, 2021",
    total: "$100,00",
    status: "Completed",
  },
  {
    id: "#3210",
    name: "Brantley Mell",
    date: "Apr 10, 2021",
    total: "$19",
    status: "Refunded",
  },
  {
    id: "#3210",
    name: "Dominique Enriques",
    date: "March 5, 2021",
    total: "$150,00",
    status: "Cancelled",
  },
];

const OrdersListPage: React.FC = () => {
  const [orders] = useState<Order[]>(initalOrders);
  const [filterdOrders, setFilterdOrders] = useState<Order[]>(initalOrders);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (searchItem: string) => {
    setSearchText(searchItem);
    const filterd = orders.filter(
      (order) =>
        order.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        order.status.toLowerCase().includes(searchItem.toLowerCase()) ||
        order.id.includes(searchItem)
    );
    setFilterdOrders(filterd);
  };

  const handleSort = (sortBy: string) => {
    let sortOrders = [...filterdOrders];

    switch (sortBy) {
      case "name":
        sortOrders.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "date":
        sortOrders.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case "price":
        sortOrders.sort(
          (a, b) =>
            parseFloat(a.total.replace("$", "").replace(",", ".")) -
            parseFloat(b.total.replace("$", "").replace(",", "."))
        );
        break;
      default:
        break;
    }
    setFilterdOrders(sortOrders);
  };

  const handleItemsPerPage = (value: string) => {
    setItemsPerPage(Number(value));
  };

  const handleReset = () => {
    setFilterdOrders(orders);
    setItemsPerPage(5);
    setCurrentPage(1);
    setSearchText("");
  };

  const handleDeleteAll = () => {
    setFilterdOrders([]);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filterdOrders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <TableToolbar
        title="All Orders"
        showSearch={true}
        searchValue={searchText}
        onSortChange={handleSort}
        onItemsChange={handleItemsPerPage}
        onActionChange={() => {}}
        onSearch={handleSearch}
        onReset={handleReset}
        onDelete={handleDeleteAll}
      />
      <Table orders={currentOrders} />
      <Pagination
        totalItems={filterdOrders.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default OrdersListPage;
