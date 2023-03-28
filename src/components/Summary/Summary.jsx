import React from 'react';
import NextStep from '../UI/NextStep';
import PrevStep from '../UI/PrevStep';

const Summary = (props) => {
  return (
    <div>
      <p>Summary</p>
      <PrevStep {...props} />
      <NextStep {...props} />
    </div>
  );
};

export default Summary;