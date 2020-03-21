import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
// npm test -- --coverage
it("expecto to render card component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
