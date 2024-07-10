/* eslint-disable no-unused-vars */
import React,{useRef,useEffect} from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import fb from '../res/icon/facebook.png'
import instra from '../res/icon/instragram.png'
import linkdin from '../res/icon/linkdin.png'
import github from '../res/icon/github.png'
import location from '../res/icon/location.png'
import mail from '../res/icon/mail.png'
import call from '../res/icon/call.png'
const Footer = () => {
    const token = Cookies.get('auth_token');
    const isUserAuthenticated = useRef(!!token);
    useEffect(()=>{
      const temp = Cookies.get('auth_token');
      isUserAuthenticated.current = !!temp;
    })
  return (
    <>
        <div className='footer'>



            <div className='footer-sec-1'>
                <div className='nav-logo'>
                    <span className='span-1'>Travo</span><span className='span-2'>Nest</span>
                </div>
                <p>Uncover hidden gems and iconic landmarks<br/> with personalized tours designed to inspire,<br/> educate, and create lasting memories.</p>
                <div className='social-link'>
                    <span>
                        <Link to="#">
                            <img className="social-icon fb" src={fb}/>
                        </Link>
                    </span>

                    <span>
                        <Link to="#">
                            <img className="social-icon instra" src={instra}/>
                        </Link>
                    </span>
                    
                    <span>
                        <Link to="#">
                            <img className="social-icon linkdin" src={linkdin}/>
                        </Link>
                    </span>
                    
                    <span>
                        <Link to="#">
                            <img className="social-icon github" src={github}/>
                        </Link>
                    </span>
                    
                </div>
            </div>





            <div className='footer-sec-2'>
                <h5>Quick Links</h5>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/tours'>Tour</Link>
                    </li>
                    {
                        isUserAuthenticated.current? "":
                        <>
                            <li>
                                <Link to='/login'>Log IN</Link>
                            </li>
                            <li>
                                <Link to='/signup'>Sign UP</Link>
                            </li>
                        </>

                    }
                    
                </ul>
            </div>
            <div className='footer-sec-3'>
                <h5>Contacts</h5>
                <div className='xoxo'>
                    <img className="social-icon fb" src={location}/>
                    <h6><span>Address : </span>Kolkata , India</h6>
                </div>
                <div className='xoxo'>
                    <img className="social-icon fb" src={mail}/>
                    <h6><span>Email : </span>4GB@gmail.com</h6>
                </div>
                <div className='xoxo'>
                    <img className="social-icon fb" src={call}/>
                    <h6><span>Phone : </span>91001213PM</h6>
                </div>
            </div>
        </div>
        <p className="copyright">Copyright {new Date().getFullYear()} , design and develop by LORD XTEREMO. All rights reserved.</p>
    </>
  )
}

export default Footer