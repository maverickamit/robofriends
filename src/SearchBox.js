import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc ">
      <input
        className="pa3 ma2 tc ba b--green bg-washed-yellow shadow-5 br3"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
