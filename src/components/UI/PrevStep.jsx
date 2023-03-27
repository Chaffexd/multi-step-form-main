import React from 'react';
import classes from './PrevStep.module.css';

const PrevStep = (props) => {
  return (
    <button className={classes.goBack} onClick={props.prevStep}>Go Back</button>
  );
};

export default PrevStep;