import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../pages/e-commerce/DashboardPage";
import BuyerPage from "../pages/e-commerce/BuyerPage";
import CustomerPage from "../pages/e-commerce/CustomerPage";
import InvoicesPage from "../pages/e-commerce/InvoicesPage";
import OrdersListPage from "../pages/e-commerce/orders/OrdersListPage";
import OrdersDetailsPage from "../pages/e-commerce/orders/OrdersDetailsPage";
import ListPage from "../pages/e-commerce/products/ListPage";
import GridPage from "../pages/e-commerce/products/GridPage";
import DetailsPage from "../pages/e-commerce/products/DetailsPage";
import CartPage from "../pages/e-commerce/products/CartPage";
import CheckoutPage from "../pages/e-commerce/products/CheckoutPage";

import ChatPage from "../pages/apps/ChatsPage";
import EmailsPage from "../pages/apps/EmailsPage";
import TodoPage from "../pages/apps/TodoPage";

import AuthPage from "../pages/pages/AuthPage";
import ProfilePage from "../pages/pages/ProfilePage";
import UsersPage from "../pages/pages/UsersPage";
import ErrorsPage from "../pages/pages/ErrorsPage";

import NotFoundPage from "../pages/NotFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />

        <Route path="orders">
          <Route path="list" element={<OrdersListPage />} />
          <Route path="details" element={<OrdersDetailsPage />} />
        </Route>

        <Route path="products">
          <Route path="list" element={<ListPage />} />
          <Route path="grid" element={<GridPage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>

        <Route path="buyer" element={<BuyerPage />} />
        <Route path="customers" element={<CustomerPage />} />
        <Route path="invoices" element={<InvoicesPage />} />

        <Route path="chats" element={<ChatPage />} />
        <Route path="emails" element={<EmailsPage />} />
        <Route path="todos" element={<TodoPage />} />

        <Route path="profile" element={<ProfilePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="error" element={<ErrorsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
