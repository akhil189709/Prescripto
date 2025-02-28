import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
        {/* Left section */}
        <div>
          <img
            src={assets.logo}
            alt="Logo"
            className="w-32 mb-4 mx-auto sm:mx-0"
          />
          <p className="text-sm sm:text-base leading-relaxed text-gray-600">
            Welcome to our Doctors Clinic website, your trusted healthcare
            companion. Discover expert medical services, book appointments
            seamlessly, and access personalized care. <br /> Explore our
            specialities, health tips, and patient resources. Your well-being is
            our priority. Experience quality healthcare with ease and
            compassion.
          </p>
        </div>

        {/* Center section */}
        <div className="sm:ml-10">
          <p className="text-lg font-semibold mb-4">Company</p>
          <ul className="space-y-2">
            <li
              onClick={() => handleNavigation("/")}
              className="hover:text-gray-900 cursor-pointer transition"
            >
              Home
            </li>
            <li
              onClick={() => handleNavigation("/About")}
              className="hover:text-gray-900 cursor-pointer transition"
            >
              About
            </li>
            <li
              onClick={() => handleNavigation("/Contact")}
              className="hover:text-gray-900 cursor-pointer transition"
            >
              Contact Us
            </li>
            <li className="hover:text-gray-900 cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="sm:ml-10">
          <p className="text-lg font-semibold mb-4">Get in Touch</p>
          <ul className="space-y-2">
            <li className="text-sm sm:text-base hover:text-gray-900 cursor-pointer transition">
              +91-7500372210
            </li>
            <li className="text-sm sm:text-base hover:text-gray-900 cursor-pointer transition">
              akhildhiman189709@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright section */}
      <div className="border-t border-gray-200 mt-8 pt-6 text-center">
        <p className="text-sm text-gray-500">
          Copyright © 2025{" "}
          <span className="font-semibold text-gray-800">Prescripto</span> - All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
