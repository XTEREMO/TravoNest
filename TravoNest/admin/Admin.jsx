/* eslint-disable no-unused-vars */
import React from 'react'
import top from './Top'
import secret from './Secret'
import { useState } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom'
import admin from '../access_module/admin_access'
const Admin = () => {
    const [isAdmin,setIsAdmin] = useState(false) 
    const navigate = useNavigate();
    const [isError,setIsError] = useState(false)
    const check = (e)=>{
        e.preventDefault();
       if(e.target[0].value === top && e.target[1].value === secret){
            admin.islogin = true
            navigate('/admin/dashboard')
        }else{
            setIsError(true)
        }
    }
  return (
    <>
        <div>
                <div className='adminLogin-form'>
                    <form  onSubmit={check} >
                        <input className={isError?"notAdmin admin-inp":"admin-inp"} type='email' placeholder='Enter ADMIN ID '  onChange={()=>setIsError(false)}/>
                        <input className={isError?"notAdmin admin-inp":"admin-inp"} type='password' placeholder='Enter ADMIN PASSWORD ' onChange={()=>setIsError(false)}/>
                        <div style={{width:'100%',height:'20px'}}>
                                {
                                    isError? 
                                    <>
                                        <h5 style={{textAlign:'center',color:'red'}}>Invalid user - Only Admin can enter....</h5>
                                    </>:<></>
                                }
                        </div>
                        <button>GO</button>
                    </form>
                </div>
        </div>
    </>
  )
}


export default Admin