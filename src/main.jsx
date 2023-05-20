import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import AuthenticatedRoutes from "./layouts/AuthenticatedRoutes.jsx";
import Dashboard, {loader as dashboardLoader} from "./components/Dashboard/Dashboard.jsx";
import TeamPage from "./components/TeamPage/TeamPage.jsx";
import { setupHealthCloudAccessToken } from "./api/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <AuthenticatedRoutes/>,
    children: [
      {
        path: "/dashboard",
        loader: dashboardLoader,
        element: <Dashboard />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
    ],
  }
]);

setupHealthCloudAccessToken();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
