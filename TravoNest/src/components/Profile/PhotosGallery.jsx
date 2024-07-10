/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Pages.css'
import add from '../../components/res/icon/adding.png'
import swal from 'sweetalert';
const PhotosGallery = (props) => {

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
    const result = await fetch('http://localhost:8000/gallery_image_adder',{
      method: "POST",
      credentials: 'include',
      headers:{
        'Content-Type': "application/json",
      },
      body:JSON.stringify({image})
    })
    if(result.status == 402){
      swal("Size must be less than 16mb", "", "error");
    }else{
      window.location.reload();
    }
  }




    return (
      <div className='profile-gallery'>
          <label htmlFor='add-gallery-img'>
              <div className='add-in-gallery'>
                    <input type='file' id="add-gallery-img" onChange={onProFileUpload}/>
                    <img src={add} width={100}/>
              </div>
          </label>
          {
                props.gallery.map((img)=>{
                  return(
                      <img className='profile-gallery-images' key={img} src={img}/>
                  )
                })
          }
        </div>
    )
  }


export default PhotosGallery