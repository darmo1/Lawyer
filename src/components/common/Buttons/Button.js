import Link from "next/link";
import React from "react";

const Button = ({ text, className = "", link = "#" }) => {
  return (
    <div role="button" className={`${className} w-md-40 h-14 text-center `}>
      <Link href={link}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

export default Button;
