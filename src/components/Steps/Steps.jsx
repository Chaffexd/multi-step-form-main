import React from 'react';
import Step from './Step';

import classes from './Steps.module.css';

const Steps = () => {
  return (
    <div className={classes.stepsContainer}>
      <Step 
        step="1"
        stage="STEP 1"
        info="YOUR INFO"
      />
      <Step 
        step="2"
        stage="STEP 2"
        info="SELECT PLAN"
      />
      <Step 
        step="3"
        stage="STEP 3"
        info="ADD-ONS"
      />
      <Step 
        step="4"
        stage="STEP 4"
        info="SUMMARYS"
      />
    </div>
  );
};

export default Steps;