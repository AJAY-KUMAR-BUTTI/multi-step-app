import React, {useContext} from 'react'
import { Button, TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'

function SecondStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div>
      <h2>Image Gallery :</h2>
      <div>
        <TextField  type='file' value={userData['images']} onChange={(e) => setUserData({...userData,'images' : e.target.value})} variant='outlined' color='primary' margin='normal'  />
    </div>
        <div className='mb-3'>
          <Button variant='contained' onClick={() => setStep(1)} color='secondary'>Back</Button><span> </span>
          <Button variant='contained' onClick={() => setStep(3)} color='primary'>Next</Button>
        </div>
    </div>
  )
}

export default SecondStep
