import React from "react";


const ContainerCard = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default ContainerCard;
