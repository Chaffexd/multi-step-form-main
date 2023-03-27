import React, { useState } from 'react';

import Steps from './components/Steps/Steps';
import Form from './components/Form/Form';
import Plan from './components/Plan/Plan';
import Pricing from './components/Pricing/Pricing';
import Summary from './components/Summary/Summary';

import './App.css'

function App(props) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStepHandler = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStepHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  console.log(currentStep);
  return (
    <div className="App">
      <Steps currentStep={currentStep} /> 
      {currentStep === 1 && <Form currentStep={currentStep} nextStep={nextStepHandler} />}
      {currentStep === 2 && <Plan currentStep={currentStep} nextStep={nextStepHandler} prevStep={prevStepHandler} />}
      {currentStep === 3 && <Pricing currentStep={currentStep} nextStep={nextStepHandler} prevStep={prevStepHandler} />}
      {currentStep === 4 && <Summary prevStep={prevStepHandler} />}
    </div>
  )
}

export default App
