import Image from "next/image";
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
          <Image src="/gmail.png" width={40} height={40} alt="icon-email" />
          <span className="ml-2">derechopeticiones@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
