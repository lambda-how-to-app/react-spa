import React from "react";
import { connect } from "react-redux";

import Login from "./components/Login";
import Signup from "./components/Signup";
import UsersList from "./components/UsersList";
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div>
      <h1>App component</h1>
      <Login />
      <Signup />
      <UsersList />
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
