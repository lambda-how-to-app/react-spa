import React from "react";
import { connect } from "react-redux";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div>
      <h1>App component</h1>
      <Login />
      <Signup />  
      <Welcome/>
      
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
