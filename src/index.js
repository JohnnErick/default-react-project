/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import Store from "settings/configureStore";

import ExampleWrapper from "components/ExampleWrapper";

const App = () => (
  <Provider store={Store}>
    <ExampleWrapper />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
