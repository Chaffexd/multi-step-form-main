import React from 'react';
import NextStep from '../UI/NextStep';
import PrevStep from '../UI/PrevStep';

const Plan = (props) => {

  return (
    <div>
      <p>Plan slide</p>
      <PrevStep {...props} />
      <NextStep {...props} />
    </div>
  );
};

export default Plan;