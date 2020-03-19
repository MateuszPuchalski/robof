import React, { useState, useEffect } from "react";

import faker from "faker";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

export default function App() {
  const [searchfield, setSearchfield] = useState("");
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
      return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
    });
    setFilteredRobots(arr);
  }, [robots, searchfield]);

  return (
    <div className="tc">
      <h1>Robof</h1>
      <SearchBox
        searchChange={evt => {
          setSearchfield(evt.target.value);
        }}
      />
      <CardList robots={filteredRobots} />
    </div>
  );
}
