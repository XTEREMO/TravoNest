/* eslint-disable no-unused-vars */
import React from 'react'
import './Login.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logImg from '../res/homegallary/login_background2.png'
import swal from 'sweetalert';

const Login = () => {

  const nevigate = useNavigate()
  const initialValue = {
    email:"",
    password:""
  }

  const [logindata,setLoginData] = useState(initialValue);


  const onCHangeHandeler = (e)=>{
    const { name,value } = e.target;
    setLoginData({...logindata, [name]: value})
  }


  const onSubmitHAndeler = async(e)=>{
    e.preventDefault();
    const res = await fetch('http://localhost:8000/login',{
      method: "POST",
      headers:{
        'Content-Type': "application/json",
      },
      credentials: 'include',
      body:JSON.stringify(logindata)
    })
    if(res.status === 402){
      swal("Email doesn't exist..", "Enter a valid email", "error");
    }
    else if(res.status === 401){
      swal("Wrong Password", "Enter a valid Password", "error");
    }else if(res.status === 500){
      swal("Server Error", "Comeback latter", "error");
    }else{
      nevigate('/')
      window.location.reload()
    }
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
                                        <h1>Log In</h1>
                                        <form onSubmit={onSubmitHAndeler}>
                                            <input type="email" placeholder='Email' required name='email' id='email' onChange={onCHangeHandeler}/>
                                            <input type="password" placeholder='Password' required name='password' id='password' onChange={onCHangeHandeler}/>
                                            <button className='login-btn' type='submit'>Login</button>
                                        </form>
                                </div>
                    </div>
        </div>
    </>
  )
}

export default Login
