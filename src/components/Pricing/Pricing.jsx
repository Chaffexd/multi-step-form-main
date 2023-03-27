import React from 'react';

import PrevStep from '../UI/PrevStep';
import NextStep from '../UI/NextStep';

const Pricing = (props) => {
  return (
    <div>
      <p>pricing slide</p>
      <PrevStep {...props} />
      <NextStep {...props} />
    </div>

  );
};

export default Pricing;