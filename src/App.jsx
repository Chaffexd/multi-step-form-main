import React, { useState } from 'react';

import Steps from './components/Steps/Steps';
import Form from './components/Form/Form';
import Plan from './components/Plan/Plan';
import Pricing from './components/Pricing/Pricing';
import Summary from './components/Summary/Summary';

import './App.css'
import Submitted from './components/Submitted/Submitted';

function App(props) {
  // Handles current slide
  const [currentStep, setCurrentStep] = useState(1);
  // Handles completed steps

  // Handles side icon clicks
  const slideSelector = (index) => {
      setCurrentStep(index)
  };
  // Will increase the count by, or change step by 1
  const nextStepHandler = () => {
    setCurrentStep(currentStep + 1);
  };
 // Will decrease the count by, or change step by 1
  const prevStepHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  // const formHandler = (e) => {
  //   e.preventDefault();
  // }

  console.log(currentStep);
  return (
    <div className="App">
      <form>
        <Steps currentStep={currentStep} onItemClick={slideSelector} /> 
        {currentStep === 1 && <Form currentStep={currentStep} nextStep={nextStepHandler}  />}
        {currentStep === 2 && <Plan currentStep={currentStep} nextStep={nextStepHandler} prevStep={prevStepHandler} />}
        {currentStep === 3 && <Pricing currentStep={currentStep} nextStep={nextStepHandler} prevStep={prevStepHandler} />}
        {currentStep === 4 && <Summary currentStep={currentStep} prevStep={prevStepHandler} nextStep={nextStepHandler} />}
        {currentStep === 5 && <Submitted currentStep={currentStep} onComplete={() => handleStepCompletion(5)} />}
      </form>
    </div>
  )
}

export default App
