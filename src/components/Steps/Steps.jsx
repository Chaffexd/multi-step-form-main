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
        isActive={props.currentStep === 1}
        onItemClick={() => props.onItemClick(1)}
      />
      <Step 
        step="2"
        stage="STEP 2"
        info="SELECT PLAN"
        isActive={props.currentStep === 2}
        onItemClick={() => props.onItemClick(2)}
      />
      <Step 
        step="3"
        stage="STEP 3"
        info="ADD-ONS"
        isActive={props.currentStep === 3}
        onItemClick={() => props.onItemClick(3)}
      />
      <Step 
        step="4"
        stage="STEP 4"
        info="SUMMARY"
        isActive={props.currentStep === 4}
        onItemClick={() => props.onItemClick(4)}
      />
    </div>
  );
};

export default Steps;