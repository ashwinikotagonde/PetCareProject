import React from 'react'
import './ContectForm.css'
import { useState } from 'react';

const ContectForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail]=useState('');
    const [phoneNo , setPhoneNo]=useState('');
    const [subject, setSubject]=useState('');
    const [message, setMessage]=useState('');
    

  return (
    <div>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>
            <input 
            type='text'
            id='name'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            />
          </label> 
          <label htmlFor='email'>
            <input 
            type='text'
            id='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
          </label> 
        </div>
        <div className='form-group'>
          <label htmlFor='Phone No'>
            <input 
            type='text'
            id='PhoneNo'
            placeholder='Phone No'
            name='PhoneNo'
            value={phoneNo}
            onChange={(e)=> setPhoneNo(e.target.value)}
            />
          </label> 
          <label htmlFor='subject'>
            <input 
            type='text'
            id='subject'
            placeholder='subject'
            name='subject'
            value={subject}
            onChange={(e)=> setSubject(e.target.value)}
            />
          </label> 
        </div>
        <div className='form-group'>
          <label htmlFor='message'>
            <textarea 
            type='text'
            id='message'
            placeholder='message'
            name='message'
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            />
          </label> 
        </div>
        <button className='button3' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContectForm
