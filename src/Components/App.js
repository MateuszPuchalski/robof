import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";

import { setSearchField, requestRobots } from "../actions";

export default function App({ store }) {
  const dispatch = useDispatch();
  const [filteredRobots, setFilteredRobots] = useState([]);
  const robots = useSelector(state => state.requestRobots.robots);
  const searchField = useSelector(state => state.searchRobots.searchField);

  const onSearchChange = evt => {
    dispatch(setSearchField(evt.target.value));
  };

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

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
