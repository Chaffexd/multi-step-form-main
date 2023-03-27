import React from 'react';
import Step from './Step';

import classes from './Steps.module.css';

const Steps = (props) => {
  return (
    <div className={classes.stepsContainer}>
      <Step 
        step="1"
        stage="STEP 1"
        info="YOUR INFO"
        className="firstStep"
        currentStep={props.currentStep}
      />
      <Step 
        step="2"
        stage="STEP 2"
        info="SELECT PLAN"
        className="secondStep"
        currentStep={props.currentStep}
      />
      <Step 
        step="3"
        stage="STEP 3"
        info="ADD-ONS"
        className="thirdStep"
        currentStep={props.currentStep}
      />
      <Step 
        step="4"
        stage="STEP 4"
        info="SUMMARYS"
        className="fourthStep"
        currentStep={props.currentStep}
      />
    </div>
  );
};

export default Steps;