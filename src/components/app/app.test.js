import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./app";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
});

it("renders correctly according to the snapshot", () => {
    expect(shallow(<App />)).toMatchSnapshot();
});
