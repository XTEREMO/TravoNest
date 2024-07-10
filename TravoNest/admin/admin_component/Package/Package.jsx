/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Package.css'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import upload from '../../../src/components/res/icon/img upload.png'
const Package = () => {
    const initialvalue = {
        place:"",
        image:"",
        tagline:"",
        description:"",
        price:"",
        duration:"",
        location:"",
        startDate:"",
        mode:"",
        provider:"",
        gallery:[],
        tourPlace :"", 
        tag :"",
        activities :"",
        food :""
    }
    const [tourDetails,setTourDetails] = useState(initialvalue);
    const [profile_Image,setProfile_Image] = useState("")
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
        setTourDetails({...tourDetails,image:image})
    }



    const inputHandeler =(e)=>{
        const {name,value} = e.target;
        setTourDetails({...tourDetails,[name]:value})
    }



    const submitHandeler = (e)=>{
        e.preventDefault();
        const result = fetch('http://localhost:8000/tour-upload',{
            method: "POST",
            headers:{
              'Content-Type': "application/json",
            },
            body:JSON.stringify(tourDetails)
          })
    }



    const onGalleryUpload = async(e)=>{
        const name = e.target.name;
        const file = e.target.files[0]
        const image = await imageBase64(file)
        const updatedGalleryImage = [...galleryImage, image];
        setGalleryImage(updatedGalleryImage)
        setTourDetails({...tourDetails,[name]:updatedGalleryImage})
    }




  return (
    <>
        <div className='package-body'>
            <div className='nav-in-package'>
                <AdminNavbar/>
            </div>
            <div className='package-container'>
                <h1 style={{marginBottom:'40px'}}>Add Your Package</h1>
                <form className='package-form' onSubmit={submitHandeler}>
                            <div style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                                    <input className='place pac-inp' type='text' placeholder='Enter the Destination ' name="place" onChange={inputHandeler}/>
                                    <label htmlFor='tour-profile-img'>
                                        <div className='profile-img-box'>
                                            <input type='file' id="tour-profile-img" onChange={onProFileUpload}/>
                                            {profile_Image?<img src={profile_Image} width={180} height={180} style={{borderRadius:'10px'}} />:<img src={upload} width={100}/>}
                                        </div>
                                    </label>
                            </div>

                            <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                                    <input type='text' className='location-line pac-inp' name='location' placeholder='Enter The Location' onChange={inputHandeler}/>
                                    <br/>
                                    <input type='text' className='data-line pac-inp' name='tagline' placeholder='Tag Line ' onChange={inputHandeler}/>
                                    <br/> 
                                    <textarea type='text' className='desc-line pac-inp' name='description' placeholder='Enter the description of the place' onChange={inputHandeler}/>
                            </div>

                            <div style={{width:'50vw',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                    <input type='text' className='price-line' name='price' placeholder='Enter Price ' onChange={inputHandeler}/>
                                    <input type='text' className='duration-line' name='duration' placeholder='Tour Duration' onChange={inputHandeler}/>
                                    <input type='text' className='provider-line' name='provider' placeholder='Enter Provider Name' onChange={inputHandeler}/>
                            </div>

                            <div style={{width:'100%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                                    <input type='date' className='startDate-line' name='startDate' onChange={inputHandeler}/>
                                    <select className='mode-line' id="mode" name="mode" onChange={inputHandeler}>
                                            <option>Select Your Choice</option>
                                            <option value="indoor">InDoor</option>
                                            <option value="outdoor">OutDoor</option>
                                    </select>
                            </div>
                            
                            <div style={{display:'flex',gap:'10px'}}>
                                    <div style={{maxWidth:'400px',display:'flex',gap:'10px',overflowY:'scroll'}}>
                                        {
                                            galleryImage.map((img)=>{
                                                return(
                                                    <div key={img}>
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


                            <div style={{width:'50vw',display:'flex',flexDirection:'column',gap:'20px'}}>
                                    <input type='text' className='data-line pac-inp' name='tourPlace' placeholder='Place you cover ' onChange={inputHandeler}/>
                                    <input type='text' className='data-line pac-inp' name='tag' placeholder='Tags ' onChange={inputHandeler}/>
                                    <input type='text' className='data-line pac-inp' name='activities' placeholder='Enter all Activities ' onChange={inputHandeler}/>
                                    <input type='text' className='data-line pac-inp' name='food' placeholder='Signature Foods ' onChange={inputHandeler}/>
                            </div>

                    <button className='package-upload'>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Package