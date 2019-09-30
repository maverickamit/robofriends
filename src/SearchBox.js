import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="tc">
      <input
        className="pa3 tc ba b--green bg-lighest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
