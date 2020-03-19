import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import "./index.css";
import "tachyons";
import Card from "./Components/Card";
import * as serviceWorker from "./serviceWorker";

const fakeRobots = x => {
  const robotCards = [];
  for (let i = 0; i < x; i++) {
    const name = faker.name.findName();
    const username = faker.internet.userName();
    const email = faker.internet.email();
    robotCards.push(<Card name={name} username={username} email={email} />);
  }
  return robotCards;
};

ReactDOM.render(<>{fakeRobots(8)}</>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
