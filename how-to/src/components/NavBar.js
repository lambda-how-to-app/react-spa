import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../store/actions";
import SignOut from "./Signout";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  &&& {
    width: 100%;
    height: 60px;
    background-color: #876468;
    color: FFFFFF;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    border: none;
    border-radius: 0;
  }
`;
const H1 = styled.h1`
  color: #ffffff;
  margin: 0 auto;
  margin-top: 10px;
`;

const NavBar = props => {
  const [menuState, setMenuState] = useState({});

  const handleItemClick = (e, { name }) => setMenuState({ activeItem: name });

  const { activeItem } = menuState;

  return (
    <StyledMenu inverted color="brown">
      <Menu.Item
        color="#FFFFFF;"
        to="/"
        as={NavLink}
        to="/"
        name="how-to"
        active={activeItem === "how-to"}
        content="Home"
        onClick={handleItemClick}
      />
      <H1>HOW-TO</H1>
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
            to={`/${localStorage.getItem("userType")}-dashboard`}
            name="dashboard"
            active={activeItem === "dashboard"}
            content="My Dashboard"
            onClick={handleItemClick}
            position="right"
          />
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            /* onClick={(e, name) => {
              handleItemClick(e, name);
              props.logout();
            }} */
          >
            <SignOut logout={props.logout} />
          </Menu.Item>
        </>
      )}
    </StyledMenu>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    userType: state.userType
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
