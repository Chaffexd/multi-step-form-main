import React from 'react';

import classes from './Step.module.css';

const Step = (props) => {

  const currentSlide = props.isActive ? `${classes.circle} ${classes.active}` : `${classes.circle}`;

  return (
    <div className={`${classes.stepContainer}`} onClick={props.onItemClick}>
        <span className={currentSlide}>{props.step}</span>
        <div>
            <p className={classes.stage}>{props.stage}</p>
            <p className={classes.info}>{props.info}</p>
        </div>
    </div>
  )
};

export default Step;