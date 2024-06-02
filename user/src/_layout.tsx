import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "./components";
import { Home, LandingPage, Search } from "./pages";
import { useAuthContext } from "./contexts/AuthContext";

const Layout = () => {
  const { auth }: any = useAuthContext();

  return (
    <div>
      <Navbar />
      {auth ? <Outlet /> : <LandingPage /> }
    </div>
  );
};

export default Layout;
