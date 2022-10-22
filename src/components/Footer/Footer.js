import React from "react";

const Footer = () => {
  return (
    <footer className="mb-0 mt-auto h-16 w-full flex flex-wrap">
      <div className="flex flex-wrap justify-around w-screen ">
        <div className="flex items-center my-2 my-md-0">
          <p>Copyright © 2022. Todos los derechos reservados</p>
        </div>
        <div className="flex items-center my-2 my-md-0">
          <p>Hecho con 🧡 para Colombia</p>
        </div>
        <div className="flex items-center my-2 my-md-0">
          <img src="/gmail.png" className="w-4 h-4" />
          <span className="ml-2">derechopeticiones@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
