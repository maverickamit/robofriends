import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib tc br3 pa3 ma2 grow bw-2 shadow-5">
      <img
        alt="Robot pictures"
        src={`https://robohash.org/${id}?size=250x250`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
