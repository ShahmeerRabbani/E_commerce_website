import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../Config/Constraints'

const Signup = () => {

  const [fullname, setFullname] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

const handleSignupForm =async () => {
  const UserObj = {
    fullname, username,  email, password, 
  }

 await axios.post(`${API_URL}/api/signup`, UserObj)
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error))
}

  return (
    <>
    <div className='Signup'>
      <div className="Signup_box">
        <div className="leftSignup_box"></div>
        <div className="rightSignup_box">
          <h1>Create Account</h1>
          <input onChange={(e)=>setFullname(e.target.value)} type="text" placeholder='full name' />
          <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='user name' />
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='eg: example@gmail.com' />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
          <button onClick={handleSignupForm}>Sign Up</button>
          <p>Already have an account? <Link to='/login'>login</Link></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup