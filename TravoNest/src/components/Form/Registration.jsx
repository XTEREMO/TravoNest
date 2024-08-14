/* eslint-disable no-unused-vars */
import { useState } from 'react'
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './registration.css'
import upload from '../res/icon/img upload.png'

const Registration = () => {
    const location = useLocation();
    const { email } = location.state || {};
    const navigate = useNavigate()

    const initialvalue = {
        email: email,
        first_name:"",
        last_name:"",
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
        try{
        const result = fetch('http://localhost:8000/finalRegister',{
            method: "POST",
            headers:{
              'Content-Type': "application/json",
            },
            body:JSON.stringify(userData)
          })
          navigate('/login')
        }catch(error){
            console.log(error)
        }
    }


  return (
    <>
        <div style={{paddingTop:'80px',height:'80vh'}}>
            <div style={{   paddingTop: '20px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            overflowX: 'scroll'
                        }}>
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
                            <button className='add-user-btn-at-admin'> Register </button>
                        </div>
                                    
                                    
                    </form>
            </div>
        </div>
        </>
  )

    
}

export default Registration


/*

const navigate = useNavigate()
    const location = useLocation();
    const { email } = location.state || {};
    const initialValues = {email:email ,first_name:"",last_name:"",age:"",dob:"",gender:"",location:""}

    const [RegisterValue,setRegisterValue] = useState(initialValues)
    const subminHandeler = (e) =>{
        e.preventDefault();
        console.log(RegisterValue)
        try{
            const result = fetch('http://localhost:8000/finalRegister',{
                method: "POST",
                headers:{
                  'Content-Type': "application/json",
                },
                body:JSON.stringify(RegisterValue)
            })
            navigate('/login')
        }catch(error){
            console.log(error)
        }
    }

    const onChangeHandelar = async (e)=>{
        const { name,value } = e.target;
        setRegisterValue({...RegisterValue, [name]: value})
        console.log(RegisterValue)
    }


  return (
    <>
        <div className='registration-form' style={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div className='registration'>
                <h3>Fill up the registration form</h3>
                <form style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'20px'}} onSubmit={subminHandeler}>
                    <div style={{display:'flex',gap:'10px'}}>
                        <input style={{width:'14vw'}} name="first_name" type='text' required placeholder='Enter your first name' onChange={onChangeHandelar}/>
                        <input style={{width:'14vw'}} name="last_name" type='text' required placeholder='Enter your last name' onChange={onChangeHandelar}/>
                    </div>
                    <div style={{display:'flex',gap:'10px'}}>
                        <input style={{width:'10vw'}} name="age" type='text' required placeholder='Enter your Age' onChange={onChangeHandelar}/>
                        <input style={{width:'18vw'}} name="dob" required type='date' onChange={onChangeHandelar}/>
                    </div>
                    <select required id="gender" name="gender" onChange={onChangeHandelar}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="trans">Trans</option>
                            <option value="untold">Prefer not to say</option>
                    </select>
                    <input name="location" type='location' placeholder='Enter your location' onChange={onChangeHandelar}/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </>
  )

*/
