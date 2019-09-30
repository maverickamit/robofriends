// This is the Final container App. App contains all other components

import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  state = {
    robots: robots,
    searchField: ""
  };

  onSearchChange = event => {
    this.setState({ searchField: event.target.value.toLowerCase() });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField)
    );

    return (
      <div>
        <h1 className="tc"> RoboFriends </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
