import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'

function FifthStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <>
    <h4 className='mt-3'>Pricing :</h4>
    <div>
        <TextField label="Base Price" value={userData['base_price']} onChange={e => setUserData({...userData,'base_price' : e.target.value})} variant='outlined' color='primary' margin='normal'  />
    </div>
    <div>
        <Button variant='contained' onClick={() => setStep(4)} color='secondary'>Back</Button><span> </span>
        <Button variant='contained' onClick={() => setStep(6)} color='primary'>next</Button>
    </div>
    </>
  )
}

export default FifthStep
