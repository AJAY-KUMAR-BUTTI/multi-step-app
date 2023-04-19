import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { multiStepContext } from '../StepContext'

const SixthStep = () => {
  const { setStep, userData, setUserData, submitHandler } = useContext(multiStepContext);
 
  return (
    <div className='black'>
      <h2>Reservation :</h2>
      <h4>Allow instant booking :</h4>
      <div>
        <input type='checkbox' value={userData['allow_instant_booking']} onChange={e => setUserData({...userData,'allow_instant_booking' : e.target.checked})} />yes
      </div>
      <div className='mt-3 mb-3'>
        <label>Number of Guests :</label> <br />
        <input type='number' value={userData['numberOfGuests']} onChange={e => setUserData({...userData,'numberOfGuests' : e.target.value})}/>
      </div>
      <div className='mt-3 mb-3'>
        <label>Price per each additional guests :</label> <br /> <input type='number' className='form-control' value={userData['price_per_each_additional_guests']} onChange={e => setUserData({...userData,'price_per_each_additional_guests': e.target.value})} />
      </div>
      <div className='flex mb-3 mt-3'>
      <div className='me-5'>
        <label>Minimum number of hours per reservation :</label> <br /> <input type='number' className='form-control' defaultValue={0} value={userData['minimum_numberof_hours_per_reservation']} onChange={e => setUserData({...userData,'minimum_numberof_hours_per_reservation': e.target.value})} />
      </div>
      <div>
        <label>Maximum number of hours per reservation :</label> <br /> <input type='number' className='form-control' defaultValue={0} value={userData['maximum_numberof_hours_per_reservation']} onChange={e => setUserData({...userData,'maximum_numberof_hours_per_reservation': e.target.value})} />
      </div>
      </div>
      <div>
        <h4>Add availability :</h4>
        <div className='flex'>
        <div className='mt-3 mb-3'>
            <label>Start Time</label> <br />
            <input type='time' value={userData['start_date']} onChange={e => setUserData({...userData,'start_date' : e.target.value})} />
        </div>
        <div className='mt-3 mb-3'>
            <label>End Time</label> <br />
            <input type='time' value={userData['end_date']} onChange={e => setUserData({...userData,'end_date' : e.target.value})}/>
        </div>
        </div>
      </div>
      <div>
        <label>Appointment Duration :</label>
        <input type='number' className='form-control' value={userData['appointmentDuration']} onChange={e => setUserData({...userData,'appointmentDuration' : e.target.value})} />
      </div>
      <div className='mt-3 mb-3'>
        <label>Time between Appointment</label>
        <input type='number' className='form-control'  value={userData['time_between_appointment']} onChange={e => setUserData({...userData,'time_between_appointment' : e.target.value})} />
      </div>
      <div>
        <label>Recurring Period :</label> <br />
        <input type='checkbox' value={userData['recurring_period']} onChange={e => setUserData({...userData,'recurring_period' : e.target.checked})} />yes
      </div>
      <div className='flex'>
        <div>
            <label>Start Date :</label> <br />
            <input type='date' value={userData['start_date']} onChange={e => setUserData({...userData,'start_date' : e.target.value})} />
        </div>
        <div>
            <label>End Date :</label> <br />
            <input type='date' value={userData['end_date']} onChange={e => setUserData({...userData,'end_date' : e.target.value})} />
        </div>
      </div>
      <div className='flex mt-3'>
        <Button variant='contained' onClick={() => setStep(5)} color='secondary'>Back</Button><span> </span>
        <Button variant='contained' onClick={submitHandler} color='primary'>Submit</Button>
    </div>
    </div>
  )
}

export default SixthStep
