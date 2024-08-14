/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import './Register.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'

import logImg from '../res/homegallary/login_background2.png'
import axios from 'axios';
const Register = () => {

  const nevigate = useNavigate()
  const initialValues = {email:"",password:"",confirm:""}
  const [RegisterValue,setRegisterValue] = useState(initialValues)
  const [errorStyle,setErrorStyle] = useState(false)

  const validPassword = (password) =>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  const postData = async(e)=>{
    e.preventDefault();

    if(validPassword(RegisterValue.password) && RegisterValue.password === RegisterValue.confirm && RegisterValue.email !== ""){
      const result = fetch('http://localhost:8000/register',{
        method: "POST",
        headers:{
          'Content-Type': "application/json",
        },
        body:JSON.stringify(RegisterValue)
      })

      nevigate('/registration-form-fillup',{ state: {email: `${RegisterValue.email}` } })
    }else{
      setErrorStyle(true)
    }
    
  }





  const onChangeHandelar = async (e)=>{
    const { name,value } = e.target;
    setRegisterValue({...RegisterValue, [name]: value})
  }

  return (
    <>
        <div className='login-container'>
                    <div className='login-body'>
                                <div className='login-left'>
                                    <img src={logImg}/>
                                    <h1>WELLCOME TO A WONDERFUL JOURNY</h1>
                                </div>
                                <div className='login-right'>
                                        <h1>Register</h1>
                                        <form className={errorStyle?"inp-style":""} onSubmit={postData}>
                                            <input type="email" placeholder='Email' name="email" required id='email' onChange={onChangeHandelar}/>
                                            <input type="password" placeholder='Password' name="password" required id='password' onChange={onChangeHandelar}/>
                                            <input type="password" placeholder='Confrim Password' name="confirm" required id='confirm' onChange={onChangeHandelar}/>
                                            <button className='login-btn' onClick={postData} type='submit'>Register</button>
                                        </form>
                                </div>
                    </div>
        </div>
    </>
  )
}

export default Register


/*


      <svg viewBox="0 0 320 300">
        <defs>
          <linearGradient
                          inkscape:collect="always"
                          id="linearGradient"
                          x1="13"
                          y1="193.49992"
                          x2="307"
                          y2="193.49992"
                          gradientUnits="userSpaceOnUse">
            <stop
                  style="stop-color:#ff00ff;"
                  offset="0"
                  id="stop876" />
            <stop
                  style="stop-color:#ff0000;"
                  offset="1"
                  id="stop878" />
          </linearGradient>
        </defs>
        <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
      </svg>
      <div className="form">
        <label for="email">Email</label>
        <input type="email" id="email">
        <label for="password">Password</label>
        <input type="password" id="password">
        <input type="submit" id="submit" value="Submit">
      </div>


*/