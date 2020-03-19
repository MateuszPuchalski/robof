import React from "react";

import Card from "./Card";

export default function CardList({ robots }) {
  return (
    <>
      {robots.map((robot, i) => {
        return (
          <Card
            key={i}
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        );
      })}
    </>
  );
}
