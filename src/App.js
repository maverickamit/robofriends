// This is the Final container App. App contains all other components

import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  state = {
    robots: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => {
        return resp.json();
      })
      .then(users => {
        return this.setState({ robots: users });
      });
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value.toLowerCase() });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField)
    );

    return (
      <div>
        <h1 className="tc f1"> RoboFriends </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
