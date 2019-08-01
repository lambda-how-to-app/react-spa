
import React from "react";
import "../../src/index.css";
import { Link } from "react-router-dom";

// testing use: remove imports later
import Guide from "./Guide.js";
import MyGuides from "./MyGuides.js";

function Welcome() {
  return (
    <div>
      <MyGuides />
      <h1 className="ui header">WELCOME TO HOW-TO</h1>
      <div className="field">
        <button className="ui button" id="CreatorButton">
          <div className="ui right floated compact segment small">
            <div className="ui fitted checkbox radio">
              <input type="checkbox" />
              <label />
            </div>
          </div>
          <div id="CreatorAcc"> Creator Account </div>
          <br />
          <div className="content" id="FirstContent">
            <div className="header">
              <i className="right triangle icon" /> Organize how-to tutorials
            </div>
            <div className="header">
              {" "}
              <i clclassNameass="right triangle icon" /> Use Photos and videos
            </div>
            <div className="header">
              {" "}
              <i className="right triangle icon" /> Gain followers
            </div>
            <div className="header">
              {" "}
              <i className="right triangle icon" /> Share guides privately OR
              publicly
            </div>
          </div>
        </button>
      </div>
      <br />

      <div className="field">
        <button className="ui button" id="GenralButton">
          <div className="ui right floated compact segment ">
            <div className="ui fitted checkbox">
              <input type="checkbox" />
              <label />
            </div>
          </div>
          <div id="GeneralAcc"> General Account </div>
          <br />
          <div className="content" id="secondContent">
            <div className="header">
              <i className="right triangle icon" /> find tutorials and other guides
            </div>
            <div className="header">
              {" "}
              <i className="right triangle icon" />
              easily search/filter how-to guides
            </div>
            <div className="header">
              {" "}
              <i className="right triangle icon" /> follow your favorite creators
            </div>
            <div claclassNamess="header">
              {" "}
              <i className="right triangle icon" /> share guides with friends
            </div>
          </div>
        </button>
      </div>
      <br />
      <div className="field">
        <button className="ui button" id="signUpButton">
          {" "}
          <Link className="link" to="/sign-up">
            Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
