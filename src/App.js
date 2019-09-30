import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

const App = () => {
  return (
    <div>
      <h1 className="tc"> RoboFriends </h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
