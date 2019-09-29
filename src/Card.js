import React from "react";

const Card = () => {
  return (
    <div className="bg-light-green dib tc br3 pa3 ma2">
      <img alt="Robot pictures" src="https://robohash.org/test?size=150x150" />
      <div>
        <h2>Jane Doe</h2>
        <p>Janedoe@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;
