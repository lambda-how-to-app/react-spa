import React from 'react';
import '../../src/index.css' 
import { Link } from 'react-router-dom';



function Welcome() { 

    return (
        <div>
            <h1 class="ui header">WELCOME TO  HOW-TO</h1>
            <div className="field">
                <button class="ui button" id="CreatorButton">
                    <div class="ui right floated compact segment small">
                        <div class="ui fitted checkbox">
                            <input type="checkbox" />
                            <label></label>
                        </div>
                    </div>
                    <div id="CreatorAcc"> Creator Account </div>
                    <br />
                    <div class="content" id="FirstContent">
                        <div class="header"><i class="right triangle icon"></i> Organize how-to tutorials</div>
                        <div class="header">  <i class="right triangle icon"></i> Use Photos and videos</div>
                        <div class="header">  <i class="right triangle icon"></i> Gain followers</div>
                        <div class="header">  <i class="right triangle icon"></i> Share guides privately OR publicly</div>
                    </div>
                </button>
            </div><br />

            <div className="field" >
                <button class="ui button" id="GenralButton">
                    <div class="ui right floated compact segment ">
                        <div class="ui fitted checkbox">
                            <input type="checkbox" />
                            <label></label>
                        </div>
                    </div>
                    <div id="GeneralAcc"> General Account </div>
                    <br />
                    <div class="content" id="secondContent">
                        <div class="header"><i class="right triangle icon"></i> find tutorials and other guides</div>
                        <div class="header">  <i class="right triangle icon"></i>easily search/filter how-to guides</div>
                        <div class="header">  <i class="right triangle icon"></i> follow your favorite creators</div>
                        <div class="header">  <i class="right triangle icon"></i> share guides with friends</div>
                    </div>
                </button>
            </div><br />
            <div className="field">
                <button class="ui button" id="signUpButton"> <Link className = "link" to="/sign-up">Sign Up</Link></button>
            </div>
        </div>
    );
}

export default Welcome;


