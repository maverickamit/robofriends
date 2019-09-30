// This is the Final container App. App contains all other components

import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";

class App extends Component {
  state = {
    robots: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value.toLowerCase() });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField)
    );

    if (this.state.robots.length === 0) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div>
          <h1 className="tc f1"> RoboFriends </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
          <CardList robots={filteredRobots} /></Scroll>
        </div>
      );
    }
  }
}

export default App;
