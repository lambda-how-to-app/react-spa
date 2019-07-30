import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import UsersList from "./components/UsersList";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar"; 
import UserDash from './components/UserDashboard';

const App = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <Route exact path="/" component={Welcome} /> 
        <UserDash />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        {/* <Login /> */}
        {/* <Signup />
        <UsersList /> */}
        {/* <Welcome/> */}
      </Container>
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
