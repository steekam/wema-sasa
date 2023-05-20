import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedRoutes = () => {
    const isAuthenticated = true;


    return isAuthenticated ? <Outlet/> : <Navigate to={"/login"}/>;
};

export default AuthenticatedRoutes;
