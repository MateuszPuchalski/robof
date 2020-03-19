import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import faker from "faker";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

import { setSearchField } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

function App({ searchField, onSearchChange }) {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);

  const fakeRobots = x => {
    const robotCards = [];
    for (let i = 0; i < x; i++) {
      const name = faker.name.findName();
      const username = faker.internet.userName();
      const email = faker.internet.email();
      robotCards.push({ id: i + 1, name, username, email });
    }
    return robotCards;
  };

  useEffect(() => {
    setRobots(fakeRobots(10));
  }, []);

  useEffect(() => {
    const arr = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    setFilteredRobots(arr);
  }, [robots, searchField]);

  return (
    <div className="tc">
      <h1>Robof</h1>
      <SearchBox onChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
