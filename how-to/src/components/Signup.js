import React, {useState} from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {

  const [inputValue, setInputValue] = useState({firstname: '', lastname: '', email:'', psw:'', confirmpsw:''});

  const changeHandler = event => {
    setInputValue({...inputValue, [event.target.name]:event.target.value});
  };
  
  const passwordChecker = (p1, p2) => {
    if (p1 !== p2) {
      alert('passwords do not match, please try again');
    } else {
      return;
    }}

  const handleSubmit = event => {
    event.preventDefault();
    //This needs to be changed to a function that matched email/token and updates data on the backend.
    console.log(inputValue);  
    setInputValue({firstname: '', lastname: '', email:'', psw:'', confirmpsw:''});
  }

  

  return (
    <>
    <div>
      <h1> Welcome To How-To </h1>
    </div>
    <fieldset> {/*background container for login fields*/}
      <form onSubmit={event=>handleSubmit(event)}>
          <label>
            First Name
            <input type="text"  name="firstname" value={inputValue.firstname}onChange={changeHandler}/>
          </label>
          <label>
            Last Name
            <input type="text"  name="lastname"value={inputValue.lastname}onChange={changeHandler}/>
          </label>

          <label>
            Email Address
            <input type="email" name="email" value={inputValue.email}onChange={changeHandler}/>
          </label>
          <label>
            Password
            <input type="password" name="psw" value={inputValue.psw}onChange={changeHandler}/>
          </label>
          <label>
            Confirm Password
            <input type="password" name="confirmpsw" value={inputValue.confirmspw}onChange={changeHandler}/>
          </label>
      
          <button>Sign Up</button>
          <p>Already have an account? <Link to="/Login">Sign In</Link> here!</p>
      </form>
    </fieldset>
    </>
  );
};

export default Signup;


//LOU THIS IS WHAT YOU'RE WORKING ON