import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <header>
        <nav>
            <Link to={"/"}>Wema Sasa App</Link>
            <ul>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li>
                    <Link to={"/signup"}>Sign up</Link>
                </li>
            </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
