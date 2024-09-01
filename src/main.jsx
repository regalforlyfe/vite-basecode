import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import RouteName from "./routes/route-name";
import ErrorPage from "./pages/error-page";
import Dashboard from "./pages/dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: RouteName.login,
    element: <Login />,
  },
  {
    path: RouteName.register,
    element: <Register />,
  },
  {
    path: RouteName.dashboard,
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
