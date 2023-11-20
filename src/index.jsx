import React from "react";
import { render } from "react-dom";
import { App } from "./App";

const renderComponent = ({ props, selector }) => {
  const ROOT = document.querySelector(selector);

  ROOT && render(<App />, ROOT);
};

export default {
  render: renderComponent,
};
