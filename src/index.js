import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Products from "./routes/Products";
import Home from "./routes/Home";
import Reports from "./routes/Reports";
import Navbar from "./components/Navbar";
import "./App.css";
import { NewLogin } from "./routes/NewLogin/NewLogin";
import Logut from "./routes/Logut";
import { Contact } from "./Contact/Contact";

const AppLayout = () => (
  <>
    <Outlet />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<NewLogin />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reports" element={<Contact />} />
      <Route path="/Home" element={<Reports />} />
      <Route path="/User" element={<Logut />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <NewLogin />,
//       },
//       {
//         path: "/Home",
//         element: <Home />,
//       },
//       {
//         path: "products",
//         element: <Products />,
//       },
//       {
//         path: "reports",
//         element: <Reports />,
//       },
//       {
//         path: "Logout",
//         element: <Logut />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
