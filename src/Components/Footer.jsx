import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center   inter-font">
      <p className="text-sm">
        © {new Date().getFullYear()} Thaqi Ul Islam Kafi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
