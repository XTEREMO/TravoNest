/* eslint-disable no-unused-vars */
import React, { useEffect, useState ,useContext } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { DataGrid } from '@mui/x-data-grid';
import isAdmin from '../../../access_module/admin_access';
import { Context } from '../../../src/App';
const Booking = () => {
    const [pro , setPro , da , setDA , bookmarked , setBookmarked ,site , setSite , comment,setComment ,booking,setBooking,userdata,setUserdata ] = useContext(Context)
    const columns = [

    { field: 'first_name', headerName: 'First Name', width: 180 },
    { field: 'last_name', headerName: 'Last Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 280 },
    { field: 'PackageName', headerName: 'Place', width: 200 },
    { field: 'bookingDate', headerName: 'Date', width: 270 },
  ];

  if(isAdmin.islogin)return (
    <>
        <div className='user-data-body' style={{display:'flex'}}>
           <AdminNavbar/>
            <div className='user-data-table'>
            <DataGrid
                rows={booking}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
            />
                           
            </div>
        </div>
    </>
  )
}

export default Booking
