import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { multiStepContext } from '../StepContext'

function FourthStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div>
        <h2>Category :</h2>
        <div className='flex'>
            <div>
                <div className='black left'>
                 <label>Greate For : </label> <br />
                    <input type='checkbox' name='Greate_for' value='everyOnce' onChange={e => setUserData({...userData,'Greate_for' : e.target.value})} />everyOnce <br/>
                    <input type='checkbox' name='Greate_for' value='Families' onChange={e => setUserData({...userData,'Greate_for' : e.target.value})} />Families <br/>
                    <input type='checkbox' name='Greate_for' value='Groups' onChange={e => setUserData({...userData,'Greate_for' : e.target.value})} />Groups
                </div>

                <div className='black'>
                <label>Regions : </label> <br />
                    <input type='checkbox' name='Regions' value='Amsterdam' onChange={e => setUserData({...userData,'Regions' : e.target.value})} />Amsterdam <br/>
                    <input type='checkbox' name='Regions' value='Pairs' onChange={e => setUserData({...userData,'Regions' : e.target.value})} />Pairs <br/>
                    <input type='checkbox' name='Regions' value='London' onChange={e => setUserData({...userData,'Regions' : e.target.value})} />London
                </div>
                </div>
        
        <div className='black'><label>Group Size :</label> <br />
        
            <input type='checkbox' name='Group_size' value='Amsterdam' onChange={e => setUserData({...userData,'Group_Size' : e.target.value})} />Amsterdam <br/>
            <input type='checkbox' name='Group_size' value='Pairs' onChange={e => setUserData({...userData,'Group_Size' : e.target.value})} />Pairs <br/>
            <input type='checkbox' name='Group_size' value='London' onChange={e => setUserData({...userData,'Group_Size' : e.target.value})} />London
          </div>
        </div>
        <div className='mt-3'>
            <Button variant='contained' onClick={() => setStep(3)} color='secondary'>Back</Button> <span> </span>
            <Button variant='contained' onClick={() => setStep(5)} color='primary'>Next</Button>
        </div>
    </div>
  )
}

export default FourthStep
