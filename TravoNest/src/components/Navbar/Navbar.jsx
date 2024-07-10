/* eslint-disable no-unused-vars */
import React,{useRef,useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
import logout from '../res/icon/logout.png'
import Cookies from 'js-cookie'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

//



const Navbar = () => {

    
  

    const [pro,setPro] = useState([])
    useEffect(()=>{
        const token = Cookies.get('auth_token');
        const isUserAuthenticated = !!token;
        if(isUserAuthenticated) fetch('http://localhost:8000/profile',{method: "GET", credentials: 'include'})
        .then( res => res.json())
        .then(data => setPro(data.data))
        .catch(error => console.log(error))
    },[])

    const navigate = useNavigate()



    const Profile =()=>{
        navigate('/profile')
    }
    const Logout =()=>{
        Cookies.remove('auth_token')
        navigate('/')
    }


    const token = Cookies.get('auth_token');
    const isUserAuthenticated = useRef(!!token);
    useEffect(()=>{
      const temp = Cookies.get('auth_token');
      isUserAuthenticated.current = !!temp;
    })
  return (
    <>
        <div className='nav-body'>
            <div className='back'>
                <div className='back-top'></div>
                <div className='back-bottom'></div>
            </div>
            <div className='nav-bar'>
                <div className='nav-logo'>
                    <span className='span-1'>Travo</span><span className='span-2'>Nest</span>
                </div>
                <div className='nav-menu'>
                    <ul>
                        <li>
                            <NavLink className='home' to='/'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink className='about' to='/about'>ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink className='tours' to={isUserAuthenticated.current?'/tours':'/login'}>TOURS</NavLink>
                        </li>
                    </ul>
                </div>

                    <div className='nav-sign-log'>
                        { isUserAuthenticated.current?
                                <>
                                <div className='profile-icon' onClick={Profile}>
                                    <img src={pro.profile_picture} style={{width:'50px',height:'50px',borderRadius:'50%'}} />
                                </div>
                                <img src={logout} style={{marginLeft:'50px', width:'30px',height:'30px'}} onClick={Logout} />
                                </>
                                :
                                <div className='log-sign-btn'>
                                    <NavLink className='login' to='/login'>LogIN</NavLink>
                                    <NavLink className='signup' to='/register'>Register</NavLink>
                                </div>
                        }
                    </div>

                
            </div>
        </div>
    </>
  )
}

export default Navbar


/* 

*/