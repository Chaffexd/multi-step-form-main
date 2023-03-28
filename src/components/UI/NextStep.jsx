import React from 'react';

import classes from './NextStep.module.css';

const NextStep = (props) => {
  return (
    <button 
      onClick={props.nextStep} 
      type={props.currentStep === 4 ? "submit" : "button"} 
      disabled={props.disabled}
    >
    {props.currentStep === 4 ? "Confirm" : "Next Step"}
    </button>
  );
};

export default NextStep;