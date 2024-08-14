/* eslint-disable no-unused-vars */
import React,{ useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import ticket from '../res/icon/ticket.png'
const Booked = () => {
  const navigate = useNavigate()
    const { id } = useParams();
    const initial = {
        _id:"",
        place :"",
        image :"",
        gallery : [""],
        tourPlace :[""],
        price :"",
        duration :"",
        tag :[""],
        activities :[""],
        food :[""],
        location :"",
        provider :"",
        startDate :"",
        mode: "",
        tagline:"",
        description:"",
    }
    const [data,setDA] = useState(initial)
    useEffect(()=>{
      fetch('http://localhost:8000/singleTour',{
        method: "POST",
        credentials: 'include',
        headers:{
          'Content-Type': "application/json",
        },
        body:JSON.stringify({id})
      })
      .then((res=> res.json()))
      .then((data=> {
        setDA(data.data)
      }))
    })
  return (
    (data._id != "")?
    <div style={{width:'100vw',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <div style={{width:'60vw',height:'90vh'}} >
                <img src={ticket} width={930} height={730}/>
                <div style={{
                    backgroundColor:'#E8AA42',
                    boxShadow:'inset 0px 0px 10px 10px rgba(0,0,0,0.3)',
                    width:'720px',
                    height:'304px',
                    position:'absolute',
                    top:'213px',
                    left:'410px',
                    borderRadius:'50px',
                    padding:'30px',
                    textAlign:'center',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-evenly',
                    color:'#CDE8E5'
                }}>
                    <h3 style={{
                         fontWeight:'900',
                         fontSize:'50px'
                    }}>{data.place}</h3>
                    <h5 style={{
                         fontWeight:'900'
                    }}>
                        Your sit booked for {data.startDate.split("T")[0]}
                    </h5>
                    <h4 style={{
                         fontWeight:'900'
                    }}>
                        It will be a wonderful {data.duration} Days Adventure
                    </h4>
                    <h3 style={{
                         fontWeight:'900'
                    }}>
                        Thank you for booking
                    </h3>

                </div>
        </div>
        <button style={{
          position:'absolute',
          top:'650px',
          width:'200px',
          height:'40px',
          borderRadius:'10px',
          backgroundColor:'#615EFC',
          border:'1px solid blue',
          fontWeight:'900',
          fontSize:'20px',
          color:'white'
        }} onClick={(e)=>{
            navigate('/tours')
            window.location.reload()
        }}>OK</button>
    </div>:<div></div>
  )
}

export default Booked