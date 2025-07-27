import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaFire, FaUser, FaUserFriends, FaPlus } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/Images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/home", icon: <FaHome /> },
    { name: "Ask", path: "/ask", icon: <FaPlus /> },
    { name: "Streaks", path: "/streaks", icon: <FaFire /> },
    { name: "Partner", path: "/partner", icon: <FaUserFriends /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative z-50">
        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="text-3xl text-green-600" />
              ) : (
                <HiMenu className="text-3xl text-green-600" />
              )}
            </button>
          </div>

          <NavLink to="/" className="md:ml-2 ml-0">
            <img src={logo} alt="Shopique Logo" className="h-10 w-auto" />
          </NavLink>
        </div>

        <div className="hidden lg:flex gap-6 items-center mx-auto mr-20">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 font-medium text-sm px-3 py-2  rounded-md transition-colors ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-black hover:text-green-600"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-[64px]  left-0 w-full border-t border-
        [hsla(220,13%,91%,1)] bg-white shadow-md overflow-hidden transition-all duration-500 ease-in-out z-40 ${
          isOpen ? "top-[64px] max-h-[500px]" : "top-[64px] max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 gap-3">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 font-medium text-base rounded-lg ${
                  index === 0 ? "mt-2  pt-4" : ""
                } ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "text-black hover:text-green-700"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-white opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
