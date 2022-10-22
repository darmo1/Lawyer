import React from "react";
import BlockContent from "@sanity/block-content-to-react";

const Information = ({ information = "",  more = false }) => {
  return (
    <div className="mx-2 ">
      <p>{information?.substring(0, 150)}...</p>

      {!!more && <span>Leer mas ....</span>}
    </div>
  );
};

export default Information;
