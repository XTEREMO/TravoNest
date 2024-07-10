/* eslint-disable no-unused-vars */
import React,{ useState,useEffect,useContext } from 'react'
import bookmark_fill from '../res/icon/fill.png'
import { Navigate, useNavigate } from 'react-router-dom'
import { Context } from '../../App.jsx'

const Bookmark = () => {

  const [pro , setPro , da , setDA , bookmarked , setBookmarked ,site , setSite , comment,setComment ,booking,setBooking ,userdata,setUserdata ] = useContext(Context)
  const navigate = useNavigate()


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
          console.log(BookmarkResponse)
          setBookmarked((state)=>{
            return [...BookmarkResponse.bookMark]
        })
    }

    const onclickHandeler = (e)=>{
      if(e.target.className!="")  navigate(`/card-view/${e.target.className}`)
    }

  return (
    <div style={{width:'100vw',height:'70vh', display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px',marginBottom:'30px'}}>
          <h3 style={{textAlign:'center',fontWeight:'800',color:'lightgray'}}>Your Wish List</h3>
          <div style={{width:'60vw',height:'65vh',overflowX:'scroll',borderRadius:'10px',display:'flex',flexDirection:'column',gap:'20px',alignItems:'center'}}>
          {
            (da.length > 0)?
                  da.map( item => {
                    const year = item.startDate.split("-")[0]
                    const month = item.startDate.split("-")[1]
                    const day = item.startDate.split("-")[2].split("T")[0]

                    if(bookmarked.includes(item._id)){
                      return (
                        <div key={item._id} className={item._id} style={{width:'60vw',height:'150px',paddingTop:'10px',paddingBottom:'10px',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'#F6F5F2',boxShadow:'inset 0px 0px 5px  gray'}} onClick={onclickHandeler}>  
                              <img className={item._id} style={{borderRadius:'6px',marginLeft:'15px'}} src={item.image} width={120} height={120} />
                              <h5 className={item._id} style={{width:'200px',marginLeft:'-40px'}}>{item.place} <br/> {item.location}</h5>
                              <div className={item._id} style={{textAlign:'center'}}>
                                <h6 className={item._id}>{day} / {month} / {year}</h6>
                                <h6 className={item._id}>For {item.duration} Days</h6>
                              </div>
                              <h6 className={item._id} style={{marginRight:'10px'}}>{item.price} / head</h6>
                              <img name={item._id} src={bookmark_fill} style={{all:'unset',width:'50px',height:'50px',marginRight:'15px'}} onClick={bookmarkHandeler}/>
                        </div>
                    )
                    }
                  })
                 : 
                 <div>
                      <h6>No Bookmarks to show</h6>
                 </div> 

            }
        </div>
    </div>
  )
}

export default Bookmark