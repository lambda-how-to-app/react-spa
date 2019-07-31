import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form, Header, Input } from "semantic-ui-react";

import { signUp } from "../store/actions";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

const Signup = (props, { isSubmitting }) => {
  const [storedValue, setValue] = useLocalStorage("token");

  const SecretDiv = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;
  `;

  const LoginSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email()
      .required("Your email is required"),
    password: Yup.string()
      .min(8, "Your password must be at least 8 characters long")
      .required("Your password is required"),
    confirmpassword: Yup.string()
      .min(8, "Your password must be at least 8 characters long")
      .required("Your password is required")
  });

  return (
    <SecretDiv>
      <Header size="huge">Welcome To How-To</Header>

      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
          confirmpassword: ""
        }}
        onSubmit={(values, actions) => {
          props.signUp(values).then(res => {
            if (res) {
              props.history.push("/creator-dashboard");
            }
          });
          actions.resetForm("");
        }}
        render={({
          touched,
          errors,
          handleSubmit,
          handleChange,
          handleBlur,
          values
        }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Form.Field
                label="First Name"
                value={values.firstname || ""}
                className="emailContainer"
                control={Input}
                autoComplete="off"
                placeholder="First Name"
                name="firstname"
                type="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstname && touched.firstname ? (
                <p style={{ margin: "0", color: "red" }}>{errors.firstname}</p>
              ) : null}
              <Form.Field
                label="Last Name"
                value={values.lastname || ""}
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Last Name"
                name="lastname"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastname && touched.lastname ? (
                <p style={{ margin: "0", color: "red" }}>{errors.lastname}</p>
              ) : null}
              <Form.Field
                label="Username"
                value={values.username || ""}
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Username"
                name="username"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p style={{ margin: "0", color: "red" }}>{errors.username}</p>
              ) : null}
              <Form.Field
                label="Email"
                value={values.email || ""}
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Email"
                name="email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p style={{ margin: "0", color: "red" }}>{errors.email}</p>
              ) : null}
              <Form.Field
                label="Password"
                value={values.password || ""}
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
              <Form.Field
                label="Confirm Password"
                value={values.confirmpassword || ""}
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Confirm Password"
                name="confirmpassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmpassword && touched.confirmpassword ? (
                <p style={{ margin: "0", color: "red" }}>
                  {errors.confirmpassword}
                </p>
              ) : null}

              <Button className="loginButton" type="submit" color="blue">
                Sign Up &rarr;
              </Button>
              {isSubmitting && "Loading!"}
              <p className="resetCred">
                Already have an account? <Link to="/login">Sign In</Link> here!
              </p>
            </Form>
          );
        }}
      />
    </SecretDiv>
  );
};

export default connect(
  null,
  { signUp }
)(Signup);
