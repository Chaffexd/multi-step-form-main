import React from 'react';

import classes from './NextStep.module.css';

const NextStep = (props) => {
  return (
    <button onClick={props.nextStep}>Next Step</button>
  );
};

export default NextStep;