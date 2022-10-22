import Image from "next/image";
import React from "react";
import { ImageSanity, urlFor } from "../../../../../client";

const ImageAuthor = ({ ImagAuthor, authorName }) => {

  return (
    <div className="my-1">
      <Image
        loading="lazy"
        className="rounded-full w-40 h-40"
        src={urlFor(ImagAuthor).url()}
        alt={authorName}
        width={200}
        height={200}
        
      />
    </div>
  );
};

export default ImageAuthor;
