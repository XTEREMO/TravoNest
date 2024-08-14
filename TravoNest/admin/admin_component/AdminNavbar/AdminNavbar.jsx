/* eslint-disable no-unused-vars */
import React from 'react'
import './AdminNavbar.css'
import DashIcon from '../../../src/components/res/icon/dash-icon-blue.png'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
        <div className='admin-navbar'>
            <div className='admin-nav-logo' style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'30px'}}>
                <img src={DashIcon} style={{width:'40px',height:'40px'}}/>
                <Link className="list" to={'/admin/dashboard'} style={{color:'blue',fontSize:'25px'}}>DASHBOARD</Link>
            </div>
            <ul style={{display:'flex',flexDirection:'column'}}>
                <h5 style={{color:'#fff',fontWeight:'800',paddingTop:'50px'}}>Data</h5>
                <Link className="list" style={{color:'#fff',paddingLeft:'20px',marginTop:'10px'}} to={'/admin/dashboard/user-data'}>User Data</Link>
                <Link className="list" style={{color:'#fff',paddingLeft:'20px',marginTop:'10px'}} to={'/admin/dashboard/tour-data'}>Tour Data</Link>
                <Link className="list" style={{color:'#fff',paddingLeft:'20px',marginTop:'10px'}} to={'/admin/dashboard/Books'}>Booking Data</Link>
                <h5 style={{color:'#fff',fontWeight:'800',paddingTop:'50px'}}>Admin Panel</h5>
                <Link className="list" style={{color:'#fff',paddingLeft:'20px',marginTop:'10px'}} to={'/admin/dashboard/User'}>Users</Link>
                <Link className="list" style={{color:'#fff',paddingLeft:'20px',marginTop:'10px'}} to={'/admin/dashboard/Packages'}>Packages</Link>
                
            </ul>
        </div>
    </>
  )
}

export default AdminNavbar


//<Link className="list" style={{color:'#fff',paddingLeft:'20px',marginTop:'10px'}} to={'/admin/dashboard/'}>FAQ Page</Link>
