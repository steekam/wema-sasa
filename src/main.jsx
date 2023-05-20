import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import AuthenticatedRoutes from "./layouts/AuthenticatedRoutes.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import TeamPage from "./components/TeamPage/TeamPage.jsx";
import Onboard from "./components/Onboarding/Onboarding.jsx";

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
    path: "/onboard",
    element: <Onboard />,
  },
  {
    element: <AuthenticatedRoutes/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
