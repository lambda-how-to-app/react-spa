import React from "react";
import { connect } from "react-redux";

import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div>
      <h1>App component</h1>
      <Login />
      <Signup />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(App);
