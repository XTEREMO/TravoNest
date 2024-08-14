/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import './User.css'
import upload from '../../../src/components/res/icon/img upload.png'
const User = () => {
    const initialvalue = {
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        age:"",
        dob:"",
        gender:"",
        profile_picture:"",
        coverPicture:"",
        gallery:""
    }

    const [userData,setUserData] = useState(initialvalue)
    const [profile_Image,setProfile_Image] = useState("")
    const [cover_Image,setCover_Image] = useState("")
    const [galleryImage,setGalleryImage] = useState([])

    const imageBase64 = (file) =>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        const data = new Promise((resolve,reject)=>{
            reader.onload = ()=> resolve(reader.result)
            reader.onerror = (error)=> reject(error)
        })
        return data
    }

    const onProFileUpload = async(e)=>{
        const file = e.target.files[0]
        const image = await imageBase64(file)
        setProfile_Image(image)
        setUserData({...userData,profile_picture:image})
    }
    const onCoverFileUpload = async(e)=>{
        const file = e.target.files[0]
        const image = await imageBase64(file)
        setCover_Image(image)
        setUserData({...userData,coverPicture:image})
    }

    const onGalleryUpload = async(e)=>{
        const name = e.target.name;
        const file = e.target.files[0]
        const image = await imageBase64(file)
        const updatedGalleryImage = [...galleryImage, image];
        setGalleryImage(updatedGalleryImage)
        setUserData({...userData,[name]:updatedGalleryImage})
    }
    const inputHandeler =(e)=>{
        const {name,value} = e.target;
        setUserData({...userData,[name]:value})
    }

    const submitHandeler = (e)=>{
        e.preventDefault();
        const result = fetch('http://localhost:8000/user-add',{
            method: "POST",
            headers:{
              'Content-Type': "application/json",
            },
            body:JSON.stringify(userData)
          })
    }


  return (
    <>
        <div className='add-user-main'>
            <AdminNavbar/>
            <div className='add-user-container'>
                    <h1>Add a Profile</h1>
                    <form className='add-user' onSubmit={submitHandeler}>
                        <div style={{height:'230px',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                                    
                                    
                                    <label htmlFor='ProfilePictureImage'>
                                        <div className='ProfileBox'>
                                            <input type='file' id="ProfilePictureImage" onChange={onProFileUpload}/>
                                            {profile_Image?<img src={profile_Image} width={180} height={180} style={{borderRadius:'10px'}} />:<img src={upload} width={100}/>}
                                        </div>
                                    </label>


                                    <label htmlFor='CoverPic'>
                                        <div className='GalleryBox'>
                                            <input type='file' id="CoverPic" onChange={onCoverFileUpload}/>
                                            {cover_Image?<img src={cover_Image} width={580} height={180} style={{borderRadius:'10px'}} />:<img src={upload} width={100}/>}
                                        </div>
                                    </label>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-around',padding:'10px 0px'}}>
                            <input type="text" className='add-user-details1' name='first_name' placeholder='Enter Your First name ' onChange={inputHandeler}/>
                            <input type="text" className='add-user-details1' name='last_name' placeholder='Enter Your Last name ' onChange={inputHandeler}/>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-around',padding:'10px 0px'}}>
                            <input type="text" className='add-user-details1' name='email' placeholder='Enter Your Email ID ' onChange={inputHandeler}/>
                            <input type="text" className='add-user-details1' name='password' placeholder='Enter Your Password ' onChange={inputHandeler}/>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-around',padding:'10px 0px'}}>
                            <input type="text" className='add-user-details2' name='age' placeholder='Enter Your Age' onChange={inputHandeler}/>
                            <input type="date" className='add-user-details2' name='dob' placeholder='Date of birth' onChange={inputHandeler}/>
                            <input type="text" className='add-user-details2' name='gender' placeholder='Your gender' onChange={inputHandeler}/>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'20px'}}>
                            <div style={{display:'flex',justifyContent:'center' }}>
                                    <div style={{maxWidth:'400px',marginRight:'5px',display:'flex',overflowY:'scroll'}}>
                                        {
                                            galleryImage.map((img)=>{
                                                return(
                                                    <div key={img} style={{marginLeft:'5px',marginRight:'10px'}}>
                                                         <img src={img} style={{borderRadius:'10px'}} width={100} height={100}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <label htmlFor='gallery-img' style={{border:'1px solid',borderRadius:'10px'}}>
                                        <div className='gallery-img-box'>
                                            <input type='file' name='gallery' id="gallery-img" onChange={onGalleryUpload}/>
                                            <img src={upload} width={100}/>
                                        </div>
                                    </label>
                            </div>
                            <button className='add-user-btn-at-admin'> ADD </button>
                        </div>
                                    
                                    
                    </form>
            </div>
        </div>
        </>
  )
}

export default User
