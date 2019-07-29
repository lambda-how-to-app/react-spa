import React from 'react';


function Welcome() {
    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name" />
                </div>
                <div class="field">
                    <label>Email Address</label>
                    <input type="text" name="email-address" placeholder="Email Address" />
                </div> 
                <div class="field">
                    <label>Password</label>
                    <input type="text" name="password" placeholder="Password" />
                </div>  
                <div class="field">
                    <label>Confirm Password</label>
                    <input type="text" name="confirm password" placeholder="Confirm Password" />
                </div> 
                <button class="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Welcome;