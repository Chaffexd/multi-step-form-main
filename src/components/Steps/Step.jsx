import React from 'react';

import classes from './Step.module.css';

const Step = (props) => {
  return (
    <div className={classes.stepContainer}>
        <span className={classes.circle}>{props.step}</span>
        <div>
            <p className={classes.stage}>{props.stage}</p>
            <p className={classes.info}>{props.info}</p>
        </div>
    </div>
  )
};

export default Step;