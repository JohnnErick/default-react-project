/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Store from "settings/configureStore";
import { Reset } from "styled-reset";

import HomeExample from "components/HomeExample";
import ExampleWrapper from "components/ExampleWrapper";
import NotFoundExample from "components/NotFoundExample";

import { MainWrapper } from "./styles";

const App = () => (
  <Provider store={Store}>
    <MainWrapper>
      <Reset />
      <Router>
        <Switch>
          <Route path="/" exact component={HomeExample} />
          <Route path="/example" component={ExampleWrapper} />
          <Route component={NotFoundExample} />
        </Switch>
      </Router>
    </MainWrapper>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
