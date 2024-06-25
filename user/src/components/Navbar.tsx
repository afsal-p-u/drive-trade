import { CiUser } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location?.pathname

  return (
    <div className="bg-primary w-full px-[100px]">
      <div className="h-[65px] flex justify-between items-center">
        <div className="">
          <h1 className="text-2xl font-bold">
            <Link to="/">
              Drive<span className="text-secondary">Trade</span>
            </Link>
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex gap-5 text-sm">
            <Link to="/">
              <NavItem name="Home" active={true} />
            </Link>
            <Link to="/search">
              <NavItem name="Cars" />
            </Link>
            <NavItem name="About" />
            <NavItem name="Blog" />
            <NavItem name="About us" />
          </ul>

          <div className="flex items-center gap-1">
            <div className="flex items-center gap-2 text-sm font-medium border-l-[1px] px-5">
              <CiUser className="text-lg" />
              <p>Sign up</p>

            </div>

            <button className="px-7 py-2 text-sm font-medium bg-light_secondary text-secondary">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ name, active }: any) => {
  return (
    <li className={`font-medium cursor-pointer ${active && 'text-secondary'}`}>{name}</li>
  )
}

export default Navbar;
