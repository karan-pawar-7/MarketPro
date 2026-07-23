import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa6";
import ShinyText from "../components/ShinyText";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
        { name: "Result", path: "/result" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">

          <div className="flex items-end gap-[3px]">
            <span className="w-1.5 h-[7px] bg-orange-500 "></span>
            <span className="w-1.5 h-[14px] bg-orange-500 "></span>
            <span className="w-1.5 h-[21px] bg-orange-500 "></span>
            <span className="w-1.5 h-[28px] bg-orange-500 "></span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              <ShinyText
                    text="Market Pro"
                    speed={2}
                    delay={0}
                    color="#ffffff "
                    shineColor="#FF5F15"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                />
            </h1>
          </div>

        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* CTA Button */}
        <button className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300">
          Get Quote
          {/* <FaArrowRight /> */}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* {menuOpen ? <FaTimes /> : <FaBars />} */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#111] border-t border-white/10 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">

          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-orange-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center gap-2">
            Get Quote
            {/* <FaArrowRight /> */}
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;