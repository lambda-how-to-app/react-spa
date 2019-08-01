import React, { useState } from "react";
import FormUserType from "./FormUserType";

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    type: "this",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    location: ""
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = input => e => {
    setFormState({ ...formState, [input]: e.target.value });
  };

  console.log(formState);

  const {
    type,
    firstname,
    lastname,
    username,
    email,
    password,
    confirmpassword,
    location
  } = formState;

  const values = {
    type,
    firstname,
    lastname,
    username,
    email,
    password,
    confirmpassword,
    location
  };

  switch (step) {
    case 1:
      return (
        <FormUserType
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          setFormState={setFormState}
        />
      );
    case 2:
      return <h1>FormUserDetails</h1>;
    case 3:
      return <h1>Confirm</h1>;
    case 4:
      return <h1>Success</h1>;
    default:
      return;
  }
};

export default SignUpForm;
