import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import UsersList from "./components/UsersList";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import UserDashboard from "./components/UserDashboard";
import CreatorDashboard from "./components/CreatorDashboard";
import GuideList from "./components/GuideList";
import PrivateRoute from "./components/PrivateRoute";
import AddGuide from "./components/AddGuide";
import SignUpForm from "./components/forms/SignUpForm";

import Form from "./components/Form.js";

const App = () => {
  return (
    <div>
      <Container>
        <NavBar />
        {/* <SignUpForm /> */}
        <Route exact path="/" render={props => <Welcome {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/sign-up" render={props => <Signup {...props} />} />
        <PrivateRoute path="/user-dashboard" component={UserDashboard} />
        <PrivateRoute path="/creator-dashboard" component={CreatorDashboard} />
        <PrivateRoute path="/guides" component={GuideList} />
        <Route path= '/add-guide' component={AddGuide} />
        
        <Route path="/edit" render={props => <Form {...props} />} />
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
