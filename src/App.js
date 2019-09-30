import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  state = {
    robots: robots,
    searchField: ""
  };

  render() {
    return (
      <div>
        <h1 className="tc"> RoboFriends </h1>
        <SearchBox />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
