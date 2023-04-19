import React, {useContext} from 'react'
import { Button, TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'

function ThirdStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div>
      <h2>Add Phone Number :</h2>
      <div>
        <TextField label="PhoneNumber" value={userData['phoneNumber']} onChange={e => setUserData({...userData,'phoneNumber' : e.target.value})} variant='outlined' color='primary' margin='normal'  />
    </div>
    <div className='mb-3'>
        <Button variant='contained' onClick={() => setStep(2)} color='secondary'>Back</Button> <span> </span>
        <Button variant='contained' onClick={() => setStep(4)} color='primary'>Next</Button>
    </div>   
    </div>
  )
}

export default ThirdStep
