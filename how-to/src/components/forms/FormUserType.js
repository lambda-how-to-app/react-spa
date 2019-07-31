import React, { useState } from "react";
import { Form, Radio } from "semantic-ui-react";

const FormUserType = props => {
  const { values, handleChange, setFormState } = props;

  const next = e => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div>
      <h1 className="ui header">Choose Your Account Type</h1>
      <Form>
        <Form.Field>
          Selected value: <b>{values.type}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label="Choose this"
            name="type"
            value="this"
            checked={values.type === "this"}
            onChange={handleChange("type")}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Or that"
            name="type"
            value="that"
            checked={values.type === "that"}
            onChange={handleChange("type")}
          />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input
            onChange={() => handleChange("firstname")}
            placeholder="First Name"
          />
        </Form.Field>
      </Form>
    </div>
  );
};

export default FormUserType;
