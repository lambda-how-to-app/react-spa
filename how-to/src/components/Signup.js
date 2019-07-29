import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {

  const [inputValue, setInputValue] = useState({ firstname: '', lastname: '', email: '', psw: '', confirmpsw: '' });

  const changeHandler = event => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  const passwordChecker = (p1, p2) => {
    if (p1 !== p2) {
      alert('passwords do not match, please try again');
    } else {
      return;
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    passwordChecker(inputValue.psw, inputValue.confirmpsw)

    //This needs to be changed to a function that matched email/token and updates data on the backend.
    console.log(inputValue);
    setInputValue({ firstname: '', lastname: '', email: '', psw: '', confirmpsw: '' });
  }

  const Header = styled.h1`
    width: 344px;
    height: 98px;
    left: 16px;
    top: 23.47px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   
  `

  const Fieldset = styled.fieldset`
    border: none;
    background: rgba(0, 0, 0, 0.08);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 344px;
    height: 430px;
    left: 16px;
    top: 23px;
  `

  const Input = styled.input`
    background: #FAFAFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 270px;
    height: 35px;
    margin: 0 0;
    font-family: Nunito;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    color: #000000;
   `

   const Button = styled.button`
    background: #018786;
    width: 270px;
    height: 35px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    margin-top: 25px;
  `
  const P = styled.p `
    margin-top: 9px;
    margin-bottom: 0px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.87);
  `

  const FooterP = styled.p `
    width: 100%;
    height: 15px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    margin-top:0;
  `
  const EmailP = styled.p `
  margin-top: 30px;
  margin-bottom: 0px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.87);
`

  const Form = styled.form `
    margin: 0 37px;
  `

  const SecretDiv = styled.div `
    width: 100%;
    display: flex; 
    flex-direction: column;
    align-items: center;
    flex-direction: center; 
  `
  return (
    <SecretDiv>
      <Header>
        Welcome To How-To
      </Header>

      <Fieldset>
        <Form onSubmit={event => handleSubmit(event)}>
          <label>
            <P>First Name</P>
            <Input type="text" name="firstname" value={inputValue.firstname} onChange={changeHandler} />
          </label>
          <label>
            <P>Last Name</P>
            <Input type="text" name="lastname" value={inputValue.lastname} onChange={changeHandler} />
          </label>

          <label>
            <EmailP>Email Address</EmailP>
            <Input type="email" name="email" value={inputValue.email} onChange={changeHandler} />
          </label>
          <label>
            <P>Password</P>
            <Input type="password" name="psw" value={inputValue.psw} onChange={changeHandler} />
          </label>
          <label>
            <P>Confirm Password</P>
            <Input type="password" name="confirmpsw" value={inputValue.confirmpsw} onChange={changeHandler} />
          </label>

          <Button>Sign Up</Button>
          <FooterP>Already have an account? <Link to="/Login">Sign In</Link> here!</FooterP>
        </Form>
      </Fieldset>
    </SecretDiv>
  );
};

export default Signup;


//LOU THIS IS WHAT YOU'RE WORKING ON