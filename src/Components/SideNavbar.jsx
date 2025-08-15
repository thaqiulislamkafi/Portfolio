import React from "react";
import {FaUser,FaLaptopCode,FaGraduationCap,FaProjectDiagram,FaEnvelope} from "react-icons/fa";

const navItems = [
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "skills", label: "Skills", icon: <FaLaptopCode /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const SideNavbar = ({ showSideBar }) => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed hidden md:flex top-1/2 left-3 -translate-y-1/2 flex-col from-gray-900 via-gray-800 to-gray-900 rounded-4xl shadow-lg z-50 shadow-gray-700 transition-all duration-500 ease-in-out py-2 ${
        showSideBar
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 -translate-x-10 pointer-events-none"
      }`}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleScroll(item.id)}
          className="flex flex-col text-xs justify-center items-center gap-1 px-2 py-5 text-white hover:text-sky-500 transition-all duration-300 cursor-pointer"
        >
          <span className="text-lg">{item.icon}</span>
          <span className="hidden md:inline">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default SideNavbar;
