import React from "react";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>©2024 Asha Kiran Devkota</span>
        <p className="text-slate-600 hover:text-white transition-colors duration-300">Built with ❤️ Next.js / React</p> {/* Added hover effect */}
        <p className="text-white">All rights reserved.</p> {/* New line */}
      </div>
    </footer>
  );
};

export default Footer;
