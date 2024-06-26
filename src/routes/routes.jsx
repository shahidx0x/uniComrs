import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "@/pages/Blogs";
import Furnitures from "@/pages/Furnitures";
import Contacts from "@/components/Contacts";
import ProductReviews from "@/pages/ProductReviews";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import FAQ from "@/pages/Faq";
import UserDashbord from "@/layouts/UserDashbord";
import Profile from "@/pages/dashboard/users/Profile";
import WishList from "@/pages/dashboard/users/WishList";
import OrderHistory from "@/pages/dashboard/users/OrderHistory";
import ShoppingCart from "@/pages/dashboard/users/ShoppingCart";
import AdminDashbord from "@/layouts/AdminDashbord";
import Analytics from "@/pages/dashboard/admin/Analytics";
import ManageProducts from "@/pages/dashboard/admin/ManageProducts";
import ManageOrders from "@/pages/dashboard/admin/ManageOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/furnitures",
        element: <Furnitures />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/product-reviews",
        element: <ProductReviews />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <UserDashbord />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "order-history",
        element: <OrderHistory />,
      },
      {
        path: "shoping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashbord />,
    children: [
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "manage/products",
        element: <ManageProducts />,
      },
      {
        path: "manage/orders",
        element: <ManageOrders />,
      },
      {
        path: "manage/blogs",
      },
      {
        path: "manage/testimonials",
      },
    ],
  },
]);
