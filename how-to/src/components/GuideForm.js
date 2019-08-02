import React from "react";
import { connect } from "react-redux";
import { Button, Form, Header, Input } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";

import { addGuide } from "../store/actions";

const GuideForm = props => {
  console.log(props);
  const LoginSchema = Yup.object().shape({
    title: Yup.string().required("Guide title is required"),
    image: Yup.string()
  });

  return (
    <div className="ui center aligned container">
      <Header as="h1">Create a Guide</Header>

      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          title: "",
          image: ""
        }}
        onSubmit={(values, actions) => {
          props.addGuide(values).then(res => {
            if (res) {
              const userType = localStorage.getItem("userType");
              props.history.push(`/`);
              actions.resetForm("");
            }
          });
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
            <Form className="formContainer" onSubmit={handleSubmit}>
              <Form.Field
                value={values.title || ""}
                label="Guide Title"
                className="emailContainer"
                control={Input}
                autoComplete="off"
                placeholder="Guide Title"
                name="title"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.title && touched.title ? (
                <p style={{ margin: "0", color: "red" }}>{errors.title}</p>
              ) : null}
              <Form.Field
                value={values.image || ""}
                label="Guide Image URL"
                className="passwordContainer"
                control={Input}
                autoComplete="off"
                placeholder="Guide Image URL"
                name="image"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.image && touched.image ? (
                <p style={{ margin: "0", color: "red" }}>{errors.image}</p>
              ) : null}

              <Button className="loginButton" type="submit" color="blue">
                Next Step &rarr;
              </Button>

              {props.isLoggingIn && <div>"Loading!"</div>}
            </Form>
          );
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    guides: state.guides,
    error: state.error,
    isLoading: state.isLoading,
    isLoggingIn: state.isLoggingIn,
    fetchingData: state.fetchingData
  };
};

export default connect(
  mapStateToProps,
  { addGuide }
)(GuideForm);
