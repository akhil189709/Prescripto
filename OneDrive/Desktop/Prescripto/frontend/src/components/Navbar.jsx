import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowDropdown(false); // Close dropdown when an option is selected
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="relative group">
          <li className="py-1 transition-all duration-300 hover:text-blue-500">
            Home
          </li>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to="/Doctors" className="relative group">
          <li className="py-1 transition-all duration-300 hover:text-blue-500">
            All Doctors
          </li>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to="/About" className="relative group">
          <li className="py-1 transition-all duration-300 hover:text-blue-500">
            About
          </li>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to="/Contact" className="relative group">
          <li className="py-1 transition-all duration-300 hover:text-blue-500">
            Contact
          </li>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </ul>

      {/* Profile or Login Button */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile"
              onClick={toggleDropdown} // Toggle dropdown on click
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            {/* Dropdown menu */}
            {showDropdown && (
              <div className="absolute right-0 top-12 pt-2 text-base font-medium text-gray-600 z-30 bg-white shadow-md rounded-lg w-48">
                <div className="flex flex-col gap-4 p-4">
                  <p
                    onClick={() => {
                      navigate("/My-Profile");
                      closeDropdown(); // Close dropdown after selecting an option
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      navigate("/My-Appointments");
                      closeDropdown(); // Close dropdown after selecting an option
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => {
                      setToken(false);
                      closeDropdown(); // Close dropdown after logging out
                    }}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/Login")}
            className="bg-[#5f6fff] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <img
        onClick={() => setShowMenu(true)}
        className="w-6 md:hidden cursor-pointer"
        src={assets.menu_icon}
        alt="Menu Icon"
      />

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu
            ? "fixed top-0 right-0 w-3/4 h-full bg-white z-30 transition-all"
            : "h-0 w-0"
        } md:hidden overflow-hidden`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <img className="w-36" src={assets.logo} alt="Logo" />
          <img
            className="w-7 cursor-pointer"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt="Close Icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 px-5 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">
            <p className="px-4 py-2 rounded inline-block">Home</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/Doctors">
            <p className="px-4 py-2 rounded inline-block">All Doctors</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/About">
            <p className="px-4 py-2 rounded inline-block">About</p>
          </NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/Contact">
            <p className="px-4 py-2 rounded inline-block">Contact Us</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
