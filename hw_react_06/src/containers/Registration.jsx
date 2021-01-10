import React from 'react';
import { getStep } from '../store/step/selectors';
import { useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const Registration = () => {

  const step = useSelector(getStep);

  return (
    <Wrapper>
      <h1 className="step">Step {step} of 5</h1>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 />}
    </Wrapper>
  )
}

export default Registration