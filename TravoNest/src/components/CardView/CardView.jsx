/* eslint-disable no-unused-vars */
import React,{ useEffect ,useRef,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import './CardView.css'
import list from '../../../server/data';
import tagIcon from '../res/icon/tagIcon.png'
import isUser from '../../../access_module/user_access';
const CardView = () => {

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


  const bookingHandeler = async(e)=>{
    const tourID = e.target.name
    navigate(`/booked/${id}`)
    const res = await fetch('http://localhost:8000/booking',{
      method: "POST",
      headers:{
        'Content-Type': "application/json",
      },
      credentials: 'include',
      body:JSON.stringify({tourID})
    })
    window.location.reload()
}   


  return ( 
    <div className='views-container'>
        <div className='views' key={data._id}>
              <div className='profile'>
                <img src={data.image} />
                <div className='profile-details'>
                  <h2>{data.place}</h2>
                  <h5>{data.tagline}</h5>
                  <p>{data.description}</p>
                  <h6><b>location</b> - {data.location}</h6>
                  <div className='tags'>
                    <img src={tagIcon}/>
                    <h6>{data.tag.join(" / ")}</h6>
                  </div>
                </div>
              </div>

              <div className='booking-btn'>
                    <h5><b>Provider - </b>{data.provider}</h5>
                    <h5>{data.duration} from {data.startDate}</h5>
                    <h5 className='price-Tag'>{data.price} Per Head</h5>
                    <button name={id} onClick={bookingHandeler}>Book Now</button>
              </div>

              <div className='card-content'>

                  <div className='card-gallery'>
                      {
                        data.gallery.map( images => {
                          return (
                            <img className='view-gallery' key={images} src={images}/>
                          )
                        })
                      }
                  </div>
                  
                  <div className='card-package'>
                        <div className='attraction-list'>
                            <h4>Attraction of {data.place}</h4>
                            <div className='attraction'>
                            {
                              data.tourPlace.map( place => {
                                return (
                                  <h6 key={place}>{place}</h6>
                                )
                              })
                            }
                            </div>
                        </div>




                        <div className='activities-list'>
                            <h4>activities in {data.place}</h4>
                            <div className='activities'>
                            {
                              data.activities.map( activity => {
                                return (
                                  <h6 key={activity}>{activity}</h6>
                                )
                              })
                            }
                            </div>
                        </div>


                        <div className='food-list'>
                            <h4>Food you can try in {data.place}</h4>
                            <div className='foods'>
                            {
                              data.food.map( food => {
                                return (
                                  <h6 key={food}>{food}</h6>
                                )
                              })
                            }
                            </div>
                        </div>
                  </div>
              </div>

        </div>
    </div> 
  )
}

export default CardView