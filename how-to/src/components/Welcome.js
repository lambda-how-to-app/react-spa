import React from "react";
import "../../src/index.css";
import { Link } from "react-router-dom";

// testing use: remove imports later
import Guide from "./Guide.js";
import MyGuides from "./MyGuides.js";

function Welcome() {
  return (
    <div>
      <h1 className="ui header">WELCOME TO HOW-TO</h1>
    </div>
  );
}

export default Welcome;
