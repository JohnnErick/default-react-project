import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchExample } from "actions/example";
import { example } from "selectors/example";
import { Container } from "./styles";

class ExampleWrapper extends Component {
  componentDidMount() {
    const { fetchExample } = this.props;
    fetchExample();
  }

  render() {
    const { example } = this.props;
    console.log(example);

    return (
      <Container>Example Wrapper Content</Container>
    );
  }
}

const mapStateToProps = state => ({
  example: example(state)
});

const mapDispatchToProps = {
  fetchExample
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleWrapper);
