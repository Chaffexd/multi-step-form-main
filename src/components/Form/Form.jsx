import React from 'react';
import useInput from '../../hooks/use-input';
import NextStep from '../UI/NextStep';

import classes from './Form.module.css';

const Form = (props) => {
  // Name section
  const {
    value: enteredName,
    hasError: nameError,
    isValid: nameIsValid, 
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlur,
    resetInput: resetName
  } = useInput((value) => value.trim() !== "");

  // Email section
  const {
    value: enteredEmail,
    hasError: emailError,
    isValid: emailIsValid, 
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailBlur,
    resetInput: resetEmail
  } = useInput((value) => value.trim() !== "" && value.includes("@") && value.length > 4);

  // Phone section - consider actual regex?
  const {
    value: enteredPhoneNumber,
    hasError: phoneNumberError,
    isValid: phoneNumberIsValid, 
    valueChangedHandler: phoneNumberChangedHandler,
    inputBlurHandler: phoneNumberBlur,
    resetInput: resetPhoneNumber
  } = useInput((value) => value.trim() !== "");

  let isFormValid = false;

  if(nameIsValid && emailIsValid && phoneNumberIsValid) {
    isFormValid = true;
  }

  const handleSubmission = (e) => {
    e.preventDefault();

    // if entered name, email, phone is not present, just return and stop
    if(!enteredName && !emailIsValid && !phoneNumberIsValid) {
      return;
    };
    console.log(enteredName, enteredEmail, enteredPhoneNumber)

    // reset fields
    resetName("");
    resetEmail("");
    resetPhoneNumber("");
  };

  const nameInputClasses = nameError ? `${classes.formInput} ${classes.invalid}` : `${classes.formInput}`;
  const emailInputClasses = emailError ? `${classes.formInput} ${classes.invalid}` : `${classes.formInput}`;
  const phoneNumberInputClasses = phoneNumberError ? `${classes.formInput} ${classes.invalid}` : `${classes.formInput}`;

  const startingForm = 
  <div className={classes.formDivContainer}>
    <div>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address and phone number.</p>
      <div className={nameInputClasses}>
        <label htmlFor="name" >Name</label>
        <input 
          type="text" 
          id="name"
          placeholder="e.g. Stephen King" 
          value={enteredName} 
          onChange={nameChangedHandler}
          onBlur={nameBlur}
        />
        {nameError && <span className={classes.errorText}>Please enter a name.</span>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email" >Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="e.g. stephenking@lorem.com"
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlur}
        />
      {emailError && <span className={classes.errorText}>Please enter a valid email.</span>}
      </div>
      <div className={phoneNumberInputClasses}>
        <label htmlFor="mobile" >Phone Number</label>
        <input 
          type="text" 
          id="mobile" 
          placeholder="e.g. +1 234 567 890"
          value={enteredPhoneNumber}
          onChange={phoneNumberChangedHandler}
          onBlur={phoneNumberBlur}
        />
      {phoneNumberError && <span className={classes.errorText}>Please enter a valid phone number.</span>}
      </div>
    </div>
    <div className={classes.buttonContainer}>
      <NextStep disabled={!isFormValid} nextStep={props.nextStep}>Next Step</NextStep>
    </div>
  </div>

  return (
    <>{startingForm}</>
  );
};

export default Form;