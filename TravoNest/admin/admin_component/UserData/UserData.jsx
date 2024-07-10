/* eslint-disable no-unused-vars */
import React, { useEffect, useState ,useContext } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import customers from '../../../server/customerData'
import { DataGrid } from '@mui/x-data-grid';
import isAdmin from '../../../access_module/admin_access';
import { Context } from '../../../src/App';
import './UserData.css'
const UserData = () => {
    const [pro , setPro , da , setDA , bookmarked , setBookmarked ,site , setSite , comment,setComment ,booking,setBooking,userdata,setUserdata ] = useContext(Context)
    const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'first_name', headerName: 'First Name', width: 100 },
    { field: 'last_name', headerName: 'Last Name', width: 100 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'age', headerName: 'Age', width: 50 },
    { field: 'dob', headerName: 'Date of Birth', width: 250 },
    { field: 'gender', headerName: 'Gender', width: 150 },
    { field: 'location', headerName: 'Place', width: 118 },
  ];
  if(isAdmin.islogin)return (
    <>
        <div className='user-data-body' style={{display:'flex'}}>
           <AdminNavbar/>
            <div className='user-data-table'>
            <DataGrid
                rows={userdata}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick
            />
                           
            </div>
        </div>
    </>
  )
}

export default UserData
