import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../Config/Constraints'

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

const handleLoginForm = async() =>{
  const userObj = {
    email, password
  }
  
  await axios.post(`${API_URL}/api/login`, userObj)
  .then(response => console.log(response.data))
  .catch(err => console.log(err))

}

  return (
    <>
    <div className='Login'>
      <div className="Login_box">
        <div className="leftLogin_box"></div>
        <div className="rightLogin_box">
          <h1>Welcome Back</h1>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='eg: example@gmail.com' />
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password'/>
          <p style={{width: '70%'}}><a href="#" >forget password?</a></p>
          <button onClick={handleLoginForm}>Login</button>
          <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login