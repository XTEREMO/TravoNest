/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import Navbar from '../Navbar/Navbar.jsx'
import PhotosGallery from './PhotosGallery'
import Upcoming from './Upcoming.jsx'
import Bookmark from './Bookmark.jsx'
import Past from './Past.jsx'

import { Context } from '../../App.jsx'

const Profile = () => {
    
    const [pro , setPro , da , setDA , bookmarked , setBookmarked ,site , setSite , comment,setComment ,booking,setBooking ,userdata,setUserdata ] = useContext(Context)
    const [page,setPage] = useState('photos')
    const loadPage = (e)=>{
      setPage(e.target.className)
    }
          return (
         
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',cursor:'default'}}>
                <div style={{marginTop:'100px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                    <img src={pro.coverPicture} alt="Loading...." width={1200} height={350} style={{borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}/>
                    <div style={{width:'1200px',height:'150px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <h1 style={{paddingLeft:'600px'}}>{pro.first_name} {pro.last_name}</h1>
                    </div>
                    <div className='profile-picture-box'>
                        <img className='profile-picture' src={pro.profile_picture}  />
                    </div>
                </div>
                <div style={{height:'40px'}}>
                      <ul className='profile-components-list'>
                        <li className={page.includes('photos')?'photos xxx':'photos'} onClick={loadPage}>Photos</li>
                        <li className={page.includes('upcoming')?'upcoming xxx':'upcoming'} onClick={loadPage}>Upcoming Tours</li>
                        <li className={page.includes('bookmark')?'bookmark xxx':'bookmark'} onClick={loadPage}>Bookmark Tours</li>
                        <li className={page.includes('past')?'past xxx':'past'} onClick={loadPage}>Past Tours</li>
                      </ul>
                </div>

                <div>
                  {page.includes('photos')?<PhotosGallery {...pro}/>:''}
                  {page.includes('upcoming')?<Upcoming/>:''}
                  {page.includes('bookmark')?<Bookmark/>:''}
                  {page.includes('past')?<Past/>:''}
                </div>
          </div>

        )
}

export default Profile










































/*


import React, { useEffect, useState } from 'react'
import './Profile.jsx'
import Navbar from '../Navbar/Navbar.jsx'
const Profile = () => {

    const [profiledata,setProfileData] = useState([])
    
    const getProfile = async()=>{
        try{
            const response  =  await fetch('http://localhost:8000/profile',{
                method: "GET",
                credentials: 'include'
              })
            const data = await response.json()
            setProfileData(data)
        }catch(error){
            console.log(error)
        }
    }   

    useEffect(()=>{
        getProfile();
    });
    

    console.log(profiledata.profile_info.email)

  return (
    <>
        <Navbar/>
        <div><br/><br/>
                <h1></h1>
        </div>
    </>
  )
}

export default Profile

*/