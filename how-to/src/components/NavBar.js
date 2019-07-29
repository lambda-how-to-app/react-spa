import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
    </Menu>
  );
};

export default NavBar;
