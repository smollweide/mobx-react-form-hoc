import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./login-form";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginForm />, div);
});
