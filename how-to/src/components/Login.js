import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';

const Login = () => {
    return (
        <div>
            <Header as='h1'>WELCOME BACK</Header>
            <Form>
                <Form.Field>
                    <label>Email Address</label>
                    <input placeholder='Email Address' />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input type='password' placeholder='Password' />
                </Form.Field>
                <p>
                    <a href="#">Forgot Your Password?</a>
                </p>
                <Button type='submit'>Sign In</Button>
                <p>
                    Don't have an account? <a href="#">Sign Up</a> here!
                </p>
            </Form>
        </div>
    )
}

export default Login;