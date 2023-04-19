import React, { useState } from 'react'
import App from './App';
import axios from 'axios';

export const multiStepContext = React.createContext();
const StepContext = () => {
    const [ currentStep, setStep ] = useState(1);
    const [ userData, setUserData ] = useState([]);
    const [ finalData, setFinalData ] = useState([]);

   async function submitHandler() {

        axios.post('/users', userData);
        setUserData('');
        setStep(1);
    }
  return (
    <div>
      <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitHandler }}>
        <App />
      </multiStepContext.Provider>
    </div>
  )
}

export default StepContext
