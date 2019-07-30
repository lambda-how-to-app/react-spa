import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import UsersList from "./components/UsersList";
import Welcome from "./components/Welcome";
<<<<<<< HEAD
import NavBar from "./components/NavBar"; 
import UserDash from './components/UserDashboard';
=======
import NavBar from "./components/NavBar";
import UserDashboard from "./components/UserDashboard";
import CreatorDashboard from "./components/CreatorDashboard";
import PrivateRoute from "./components/PrivateRoute";

<<<<<<< HEAD
import CreatorDashboard from "./components/CreatorDashboard"
>>>>>>> a17d9ad104db510d5055e8d8e0926aaa5ef2b3d4

=======
>>>>>>> cff93aabd36546be0599c92878525050278aace3
const App = () => {
  return (
    <div>
      <Container>
        <NavBar />
<<<<<<< HEAD
        <Route exact path="/" component={Welcome} /> 
        <UserDash />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
=======
        <Route exact path="/" render={props => <Welcome {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/sign-up" render={props => <Signup {...props} />} />
        <PrivateRoute path="/user-dashboard" component={UserDashboard} />
        <PrivateRoute path="/creator-dashboard" component={CreatorDashboard} />

>>>>>>> a17d9ad104db510d5055e8d8e0926aaa5ef2b3d4
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
