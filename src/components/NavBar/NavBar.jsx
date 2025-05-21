import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import Link from "../LInk/Link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoCloseOutline /> : <CiMenuBurger />}
      </div>
      <ul
        className={`md:flex absolute duration-1000 bg-yellow-200 px-6 ${
          open ? "top-40" : "-top-60"
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
