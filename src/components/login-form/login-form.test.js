import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import LoginForm from "./login-form";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginForm />, div);
});

it("renders correctly according to the snapshot", () => {
    expect(shallow(<LoginForm />)).toMatchSnapshot();
});
