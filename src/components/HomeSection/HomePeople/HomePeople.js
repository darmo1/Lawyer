import React from "react";
import CardAuthor from "../../common/CardAuthor";


const HomePeople = ({ authorData }) => {
  if (!authorData.length) {
    return;
  }

  return (
    <div className={`flex flex-col justify-center `}>
      <h1 className="text-start text-4xl my-4">People</h1>
      <div className="flex flex-wrap justify-around">
        {authorData.map(({ _id, ...props }) => (
          <CardAuthor {...props} key={_id} />
        ))}
      </div>
    </div>
  );
};

export default HomePeople;
