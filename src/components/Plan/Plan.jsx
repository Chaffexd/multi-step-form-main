import React from 'react';
import NextStep from '../UI/NextStep';
import PrevStep from '../UI/PrevStep';

const Plan = (props) => {
  return (
    <div>
      <PrevStep onClick={props.prevStep} />
      <NextStep onClick={props.NextStep} />
    </div>
  );
};

export default Plan;