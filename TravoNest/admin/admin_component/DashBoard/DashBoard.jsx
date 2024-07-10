/* eslint-disable no-unused-vars */
import React,{ useState,useEffect,useContext } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import customers from '../../../server/customerData'
import list from '../../../server/data'
import './DashBoard.css'
import isAdmin from '../../../access_module/admin_access'
import { Context } from '../../../src/App'


const DashBoard = () => {
  
  const [pro , setPro , da , setDA , bookmarked , setBookmarked ,site , setSite , comment,setComment ,booking,setBooking,userdata,setUserdata ] = useContext(Context)



  

    const currentDate = new Date();
    const pastTour = da.filter( item => {
      const tourDate = new Date(item.startDate)
      if(tourDate < currentDate) return tourDate;
    })
    const activeTour = da.filter( item => {
      const tourDate = new Date(item.startDate)
      if(tourDate > currentDate) return tourDate;
    })
   
  if(isAdmin.islogin)return (
    <>
        <div className='dashboard-body' style={{display:'flex'}}>
          <AdminNavbar/>
          <div className='dashboard-container'>
                  <div className='dashboard-sec-1' style={{width:'80vw',paddingTop:'50px' ,display:'flex',justifyContent:'space-evenly',gap:'30px'}}>
                        <div className='boxes1 customer-count'>
                            <h3>Users</h3>
                            <h3><span>{userdata.length}</span> </h3>
                        </div>
                        <div className='boxes1 package-count'>
                            <h3>Available Tours</h3>
                            <h3><span>{activeTour.length}</span> </h3>
                        </div>
                        <div className='boxes1 package-count'>
                            <h3>successfull Tours</h3>
                            <span>{pastTour.length}</span> 
                        </div>
                  </div>
                  <div className='dashboard-sec-2' style={{width:'80vw',paddingTop:'50px' ,display:'flex',justifyContent:'space-evenly',gap:'30px'}}>
                        <div className='boxes2 customer-count'>
                            <h3>Total Earnings </h3>
                            <h3><span>{site.totalEarnings}</span> Rs</h3>
                        </div>
                        <div className='boxes2 package-count'>
                            <h3> Total Bookings </h3>
                            <h3><span>{site.totalBooked}</span></h3>
                        </div>
                  </div>
                  
          </div>
        </div>
    </>
  )
}

export default DashBoard