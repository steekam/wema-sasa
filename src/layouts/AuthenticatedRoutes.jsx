import { Navigate, Outlet } from "react-router-dom";
import AppLayout from "./AppLayout";

const AuthenticatedRoutes = () => {
    const isAuthenticated = true;


    return isAuthenticated ? <AppLayout><Outlet/></AppLayout> : <Navigate to={"/login"}/>;
};

export default AuthenticatedRoutes;
