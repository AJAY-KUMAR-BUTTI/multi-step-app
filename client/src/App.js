
import './App.css';
import FirstStep from './components/FirstStep';
import { Stepper, StepLabel, Step } from '@mui/material';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import FourthStep from './components/FourthStep';
import FifthStep from './components/FifthStep';
import SixthStep from './components/SixthStep';


function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch(step) {
      case 1 :
        return <FirstStep />
        case 2 : 
        return <SecondStep />
        case 3 :
          return <ThirdStep />
          case 4 :
            return <FourthStep />
            case 5 : 
            return <FifthStep />
            case 6 : 
            return <SixthStep />
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{color : 'red', textDecoration : 'underline'}} className='mb-4'>ReactJs Multi Stage Application</h3>
        <div className='center-stepper'>

        <Stepper style={{width : '18%'}} activeStep={currentStep - 1} orientation='horizontal' className='mb-5'>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        </div>
        {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
