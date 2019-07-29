import React, { useState } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import './Login.css';

const Login = () => {

    // const { submitLogin } = props;
    const [user, setUser] = useState({ email: "", password: "" });

    function handleChange(event) {
        const loginUser = { ...user, [event.target.name]: event.target.value };
        setUser(loginUser);
        console.log("handleChange", loginUser);
    }

    const handleSubmit = event => {
        event.preventDefault();
        // submitLogin(user);
        console.log("submitted: ", user);
        setUser({ email: "", password: "" });
    };

    return (
        <div className="ui center aligned container">
            <Header as='h1'>WELCOME BACK</Header>
            <Form onSubmit={handleSubmit} className="formContainer">
                <Form.Field className="emailContainer">
                    <label htmlFor="email" className="emailLabel">Email Address</label>
                    <input 
                        placeholder='Email Address' 
                        value={user.email}
                        name="email"
                        type="email"
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="password" className="pwLabel">Password</label>
                    <input 
                        placeholder='Password' 
                        value={user.password}
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                </Form.Field>
                <p className="resetCred">
                    <a href="#" className="forgotPw">Forgot Your Password?</a>
                </p>
                <Button type='submit' className="loginButton">Sign In</Button>
                <p className="resetCred">
                    Don't have an account? <a href="#" className="newAcct">Sign Up</a> here!
                </p>
            </Form>
        </div>
    )
}

export default Login;

// need onClick for Sign Up & Forgot Password


            {/* 
            <h1 class="ui header">WELCOME BACK</h1>
            <form class="ui form">
                <div class="field">
                    <label htmlFor="email">Email Address</label>
                    <input
                        placeholder='Email Address'
                        value={user.email}
                        name="email"
                        type="email"
                        onChange={handleChange}
                    />
                </div>
                <div class="field">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder='Password'
                        value={user.password}
                        name="password"
                        type="password"
                        onChange={handleChange}
                    />
                </div>
                <p className="resetCred">
                    <a href="#" className="forgotPw">Forgot Your Password?</a>
                </p>
                <button type="submit" className="button signInButton">Sign In</button>
                <p className="resetCred">
                    Don't have an account? <a href="#" className="newAcct">Sign Up</a> here!
                </p>
            </form>
            */}