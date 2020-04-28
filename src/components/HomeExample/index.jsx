import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

const HomeExample = () => (
  <Container>
    Home Example <Link to="/example">Example Page</Link>
  </Container>
);

export default HomeExample;
