import { useState } from "react";
import Link from "../LInk/Link";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "HomePage" },
    { id: 2, path: "/about", name: "AboutPage" },
    { id: 3, path: "/services", name: "ServicesPage" },
    { id: 4, path: "/contact", name: "ContactPage" },
    { id: 5, path: "/dashboard", name: "DashboardPage" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6 ">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoCloseSharp /> : <CiMenuBurger />}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000 bg-yellow-200 px-6 ${
          open ? "top-24" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
