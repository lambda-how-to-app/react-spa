import React, { useState } from "react";
import { Button, Form, Header, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

import "./Login.css";

const Login = (props, { isSubmitting }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Your email is required"),
    password: Yup.string()
      .min(8, "Your password must be at least 8 characters long")
      .required("Your password is required")
  });

  const [storedValue, setValue] = useLocalStorage("token");

  return (
    <div className="ui center aligned container">
      <Header as="h1">Welcome Back</Header>

      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={(values, actions) => {
          console.log(actions);
          console.log(values);
          return axiosWithAuth()
            .post("/api/v1/auth/login", values)
            .then(res => {
              console.log(res);
              setValue(res.data.body.token);
              actions.resetForm("");
            })
            .catch(err => {
              console.log(err);
            });
        }}
        render={({
          touched,
          errors,
          handleSubmit,
          handleChange,
          handleBlur
        }) => {
          return (
            <Form className="formContainer" onSubmit={handleSubmit}>
              <Form.Field
                label="Email Address"
                className="emailContainer"
                control={Input}
                autoComplete="off"
                placeholder="Email Address"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p style={{ margin: "0", color: "red" }}>{errors.email}</p>
              ) : null}
              <Form.Field
                label="Password"
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p style={{ margin: "0", color: "red" }}>{errors.password}</p>
              ) : null}
              <p className="resetCred">
                <a href="#" className="forgotPw">
                  Forgot Your Password?
                </a>
              </p>
              <Button className="loginButton" type="submit" color="blue">
                Sign In &rarr;
              </Button>
              {isSubmitting && "Loading!"}
              <p className="resetCred">
                Don't have an account?{" "}
                <a href="#" className="newAcct">
                  Sign Up
                </a>{" "}
                here!
              </p>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default Login;
