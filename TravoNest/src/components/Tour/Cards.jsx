/* eslint-disable no-unused-vars */
import React, { useEffect, useState,useRef,useContext } from 'react'
import timeIcon from '../res/icon/timeIcon.png'
import { Link, useNavigate } from 'react-router-dom'
import bookmark_not_fill from '../res/icon/notfill.png'
import bookmark_fill from '../res/icon/fill.png'
import { Context } from '../../App.jsx'

const Cards = (filter) => {

    const data = useRef([])
    
    const [pro , setPro , da , setDA , bookmarked , setBookmarked ,site , setSite , comment,setComment ,booking,setBooking ,userdata,setUserdata ] = useContext(Context)
    const navigate = useNavigate();

    const colorList = ["color-1","color-2","color-3","color-4","color-5","color-6"]
    let cardCount = 0;

    data.current = da.filter(item => parseInt(item.price) < parseInt(filter.filter.price))
    if( filter.filter.attributes.length != 0){
        let filterdData = [];
        data.current.forEach(d => {
              d.tag.forEach(element =>{
                      let flag = false;
                      filter.filter.attributes.forEach(item =>{
                              if( element === item ){
                                flag = true;
                              }
                      });
                      if(flag == true && !filterdData.includes(d)){
                        filterdData.push(d)
                      }
              })
        });
        data.current = filterdData
      }
      if( filter.filter.mode.length != 0){
        let filterdData = [];
        data.current.forEach(d => {
              if(filter.filter.mode.includes(d.mode)){
                filterdData.push(d)
              }
        });
        data.current = filterdData
      }

      const bookmarkHandeler = async(e)=> {
        const tourID = e.target.name
          const res = await fetch('http://localhost:8000/bookmark',{
            method: "POST",
            headers:{
              'Content-Type': "application/json",
            },
            credentials: 'include',
            body:JSON.stringify({tourID})
          })
          const BookmarkResponse = await res.json();
          setBookmarked((state)=>{
            return [...BookmarkResponse.bookMark]
        })
      }
  return (
    <>
        <div className='product-body'>
                              {
                               
                                (data.current.length>0)?
                                data.current.map((item)=>{
                                  const year = item.startDate.split("-")[0]
                                  const month = item.startDate.split("-")[1]
                                  const day = item.startDate.split("-")[2].split("T")[0]
                                  const currentDate = new Date();
                                  const tourDate = new Date(item.startDate)
                                  if(tourDate > currentDate) return(
                                      <div className={`product-item `+colorList[cardCount++ % 6]} key={item._id}>
                                          <img src={item.image} key={item._id} alt="Error Network 404" />
                                          <div className='place-desc'>
                                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                              <h1 className='place-name'>{item.place}</h1>
                                              { 
                                                  bookmarked.includes(item._id)?
                                                      <img name={item._id} src={bookmark_fill} style={{all:'unset',width:'50px',height:'50px'}} onClick={bookmarkHandeler}/>
                                                      :
                                                      <img name={item._id} src={bookmark_not_fill} style={{all:'unset',width:'50px',height:'50px'}} onClick={bookmarkHandeler}/>
                                              }
                                                      
                                            </div>
                                              <h5 className='place-tag-line'>{item.tagline}</h5>
                                              <p className='place-history'>{item.description}</p>
                                              <h5 className='placeloc'><b>Location - </b>{item.location}</h5>
                                              <h5 className='placeloc' >{item.tag.join(" / ")}</h5>
                                          </div>
                                          <div className='place-det'>
                                            <h4>{item.price} Per head</h4>
                                            <div className='time-zone'>
                                              <img className='time-icon' src={timeIcon}/>
                                              <h6>{item.duration} Days - from {day} / {month} / {year}</h6>
                                            </div>
                                            <h5>Organized by - {item.provider}</h5>
                                            <Link className='product-view' to={`/card-view/${item._id}`} >View Details</Link>
                                          </div>
                                      </div>
                                  )
                                }):
                                  <div style={{marginTop:'200px',textAlign:'center'}}>
                                          <h6>Tours not available</h6>
                                          <h4> . . . </h4>
                                  </div> 
                                }
        </div>
    </>
  )
}

export default Cards
