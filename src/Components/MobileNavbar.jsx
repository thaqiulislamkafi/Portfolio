import React from "react";
import { FaUser, FaLaptopCode, FaGraduationCap, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const navItems = [
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "skills", label: "Skills", icon: <FaLaptopCode /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const MobileNavbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50 inter-font">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="flex flex-col gap-1 items-center text-xs text-white hover:text-sky-500 transition-colors duration-300"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
