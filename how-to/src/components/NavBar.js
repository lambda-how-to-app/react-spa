import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../store/actions";

const NavBar = props => {
  const [menuState, setMenuState] = useState({});

  const handleItemClick = (e, { name }) => setMenuState({ activeItem: name });

  const { activeItem } = menuState;

  return (
    <Menu>
      <Menu.Item
        as={NavLink}
        to="/"
        name="how-to"
        active={activeItem === "how-to"}
        content="How-To"
        onClick={handleItemClick}
      />
      {!props.user && !localStorage.getItem("token") ? (
        <>
          <Menu.Item
            as={NavLink}
            to="/login"
            name="login"
            active={activeItem === "login"}
            content="Log In"
            onClick={handleItemClick}
            position="right"
          />
          <Menu.Item
            as={NavLink}
            to="/sign-up"
            name="signup"
            active={activeItem === "signup"}
            content="Sign Up"
            onClick={handleItemClick}
          />
        </>
      ) : (
        <>
          <Menu.Item
            as={NavLink}
            to="/creator-dashboard"
            name="dashboard"
            active={activeItem === "dashboard"}
            content="My Dashboard"
            onClick={handleItemClick}
            position="right"
          />
          <Menu.Item
            as={NavLink}
            to="/sign-up"
            name="logout"
            active={activeItem === "logout"}
            content="Log Out"
            onClick={(e, name) => {
              handleItemClick(e, name);
              props.logout();
            }}
          />
        </>
      )}
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
