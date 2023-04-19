import React, { useContext } from 'react'
import { Button, TextareaAutosize, TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'

function FirstStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div>
    <h2>General :</h2>
    <div>
    <h4>Title</h4>
        <TextField label="title"  value={userData['title']} onChange={(e) => setUserData({...userData, 'title' : e.target.value})} variant='outlined' color='primary' margin='normal'  />
    </div>
    
    <div>
      <h4>Description :</h4>
        <TextareaAutosize label="description" value={userData.description} multiline onChange={e => setUserData({...userData,'description': e.target.value})} variant='outlined' color='primary' margin='normal'  />
    </div>
    <Button variant='contained' onClick={() => setStep(2)} color='primary'>Next</Button>
    </div>
  )
}

export default FirstStep
