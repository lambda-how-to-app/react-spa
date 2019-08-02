import React from "react";
import "../../src/index.css";
import { Link } from "react-router-dom";
import activity from "../../src/activity.JPG";
// testing use: remove imports later
import Guide from "./Guide.js";
import MyGuides from "./MyGuides.js";

function Welcome() {
  return (
    <div>
      <h1 className="ui header">WELCOME TO HOW-TO</h1>
      <img src={activity} />
      <h5>
        Make how-to guides, save them for later. Learn how to do new things.
        Most importantly, have fun.
      </h5>
    </div>
  );
}

export default Welcome;
