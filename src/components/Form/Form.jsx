import React from 'react';
import useInput from '../../hooks/use-input';
import Steps from '../Steps/Steps';

import classes from './Form.module.css';

const Form = () => {
  const {
    value: enteredName,
    hasError: nameError,
    isValid: nameIsValid, 
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlur,
    resetInput: resetName
  } = useInput((value) => value.trim() !== "");

  let isFormValid = false;

  if(nameIsValid) {
    isFormValid = true;
  }

  const handleSubmission = (e) => {
    e.preventDefault();

    // if entered name is not present, just return and stop
    if(!enteredName) {
      return;
    };

    // reset fields
    resetName("");
  };

  return (
    <div className={classes.formContainer}>
        <Steps />
        <form onSubmit={handleSubmission}>
          <div>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address and phone number.</p>
            <div className={classes.formInput}>
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
            <div className={classes.formInput}>
              <label htmlFor="email" >Email</label>
              <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" />
            </div>
            <div className={classes.formInput}>
              <label htmlFor="mobile" >Phone Number</label>
              <input type="text" id="mobile" placeholder="e.g. +1 234 567 890" />
            </div>
          </div>
          <button disabled={!isFormValid} >Next Step</button>
        </form>
    </div>
  );
};

export default Form;