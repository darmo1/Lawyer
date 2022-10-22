import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const GlobalLayout = ({ children, statusPayment }) => {

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default GlobalLayout;
