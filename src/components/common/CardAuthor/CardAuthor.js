import Link from "next/link";
import React from "react";
import Information from "../Blog/Information";
import Title from "../Blog/Title";
import ImageAuthor from "./ImageAuthor";

const CardAuthor = (props) => {
  const { name, slug, imageLawyer, description } = props;
  return (
    <Link href={`/#home-people`}>
      <a className="shadow-2xl  my-2 rounded-xl ">
        <div className="flex flex-col  items-center mx-4 my-2  px-2 w-[200px] max-w-[300px] max-h-80 h-72  ">
          <ImageAuthor ImagAuthor={imageLawyer} authorName={name} />
          <Title name={name} />
          <Information information={description} more={false} />
        </div>
      </a>
    </Link>
  );
};

export default CardAuthor;
