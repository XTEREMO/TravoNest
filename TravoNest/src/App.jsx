/* eslint-disable no-unused-vars */
/*
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Tour from './components/Tour/Tour';
import Login from './components/Login/Login';
import CardView from './components/CardView/CardView';
import Register from './components/Register/Register';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Admin from '../admin/Admin';
import DashBoard from '../admin/admin_component/DashBoard/DashBoard';
import UserData from '../admin/admin_component/UserData/UserData';
import TourData from '../admin/admin_component/TourData/TourData';
import isAdmin from '../access_module/admin_access';
import isUser from '../access_module/user_access';
import Registration from './components/Form/Registration';
import Package from '../admin/admin_component/Package/Package';
import Cookies from 'js-cookie';
import Profile from './components/Profile/Profile';
import User from '../admin/admin_component/User/User';
import Booked from './components/CardView/Booked';
import Booking from '../admin/admin_component/Booking/Booking';

export const Context = React.createContext();

const App = () => {
  const location = useLocation();
  const token = Cookies.get('auth_token');
  const isUserAuthenticated = !!token;
  const initial = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    profile_picture: "",
    coverPicture: "",
    gallery: []
  };
  const adminStatus = useRef(false);
  const [pro, setPro] = useState(initial);
  const [bookmarked, setBookmarked] = useState([]);
  const [da, setDA] = useState([]);
  const [site, setSite] = useState({
    totalEarnings: 0,
    totalBooked: 0,
  });
  const [booking, setBooking] = useState([]);
  const [comment, setComment] = useState([]);
  const [userdata, setUserdata] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:8000/userdata');
      const data = await res.json();
      if (data.userdata.length > 0) {
        const userdataWithIds = data.userdata.map(user => ({ ...user, id: user._id }));
        setUserdata(userdataWithIds);
      }
    } catch (error) {
      console.error('Error fetching userdata:', error);
    }
  };

  const checkStatus = async () => {
    try {
      const response = await fetch('http://localhost:8000/status', {
        method: "GET",
        credentials: 'include'
      });
      const data = await response.json();
      isUser.islogin = data.loginStatus;
    } catch (error) {
      console.error('Error checking status:', error);
    }
  };

  const fetchAllData = async () => {
    try {
      if (isUserAuthenticated) await checkStatus();
      await fetchData();

      const bookingResponse = await fetch('http://localhost:8000/booking', { method: "GET", credentials: 'include' });
      const bookingData = await bookingResponse.json();
      setBooking(bookingData.data.map(user => ({ ...user, id: user._id })));

      const siteResponse = await fetch('http://localhost:8000/site', { method: "GET", credentials: 'include' });
      const siteData = await siteResponse.json();
      setSite(siteData.data);

      const tourResponse = await fetch('http://localhost:8000/getTourData', { method: "GET", credentials: 'include' });
      const tourData = await tourResponse.json();
      setDA(tourData.data);

      if (isUserAuthenticated) {
        const profileResponse = await fetch('http://localhost:8000/profile', { method: "GET", credentials: 'include' });
        const profileData = await profileResponse.json();
        setBookmarked(profileData.data.bookmark);
        setPro(profileData.data);
      }
    } catch (e) {
      console.log('Error fetching data:', e);
    }
  };

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  });


  return (
    <Context.Provider value={[pro, setPro, da, setDA, bookmarked, setBookmarked, site, setSite, comment, setComment, booking, setBooking, userdata, setUserdata]}>
      <div className='App-body'>
        {!location.pathname.split("/").includes('admin') && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tours' element={<Tour />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/card-view/:id' element={<CardView />} />
          <Route path='/registration-form-fillup' element={<Registration />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/booked/:id' element={<Booked />} />
          {isUserAuthenticated && <Route path='/profile' element={<Profile />} />}
          {adminStatus && <Route path='/admin/dashboard' element={<DashBoard />} />}
          {adminStatus && <Route path='/admin/dashboard/user-data' element={<UserData />} />}
          {adminStatus && <Route path='/admin/dashboard/tour-data' element={<TourData />} />}
          {adminStatus && <Route path='/admin/dashboard/books' element={<Booking />} />}
          {adminStatus && <Route path='/admin/dashboard/Packages' element={<Package />} />}
          {adminStatus && <Route path='/admin/dashboard/User' element={<User />} />}
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;

*/

import React, { useEffect, useState,useRef} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Tour from './components/Tour/Tour'
import Login from './components/Login/Login'
import CardView from './components/CardView/CardView'
import Register from './components/Register/Register'
import { Routes,Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Admin  from '../admin/Admin'
import DashBoard from '../admin/admin_component/DashBoard/DashBoard'
import UserData from '../admin/admin_component/UserData/UserData'
import TourData from '../admin/admin_component/TourData/TourData'
import isAdmin from '../access_module/admin_access'
import isUser from '../access_module/user_access'
import Registration from './components/Form/Registration'
import Package from '../admin/admin_component/Package/Package'
import Cookies from 'js-cookie'
import Profile from './components/Profile/Profile'
import User from '../admin/admin_component/User/User'
import Booked from './components/CardView/Booked'
import Booking from '../admin/admin_component/Booking/Booking'



export const Context = React.createContext()



const App = () => {

  const [userdata,setUserdata] = useState([])
    const fetchData = async()=>{
        try {
            const res = await fetch('http://localhost:8000/userdata');
            const data = await res.json();
            if(data.userdata.length>0){
                const userdataWithIds = data.userdata.map(user => ({ ...user, id: user._id })); 
                setUserdata(userdataWithIds)
            }
        }catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);
  const location = useLocation()
  const token = Cookies.get('auth_token');
  const isUserAuthenticated = !!token;



  const checkStatus = async ()=>{
    const response = await fetch('http://localhost:8000/status',{
       method: "GET",
       credentials: 'include'
     });
     const data = await response.json()
    isUser.islogin = data.loginStatus
    }
    useEffect(()=>{
      if(isUserAuthenticated) checkStatus();
    },[])

//location.pathname

      const initial = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: "",
        dob: "",
        gender: "",
        profile_picture: "",
        coverPicture: "",
        gallery: []
      }

    const adminStatus = useRef(false);

    const [pro,setPro] = useState(initial);
    const [ bookmarked , setBookmarked ] = useState( [] )

    useEffect(()=>{
      if(isUserAuthenticated) fetch('http://localhost:8000/profile',{method: "GET", credentials: 'include'})
        .then( res => res.json())
        .then(data => {
          setPro(data.data);
          setBookmarked(data.data.bookmark)
        })
        .catch(error => console.log(error))
    },[])


    const [da,setDA] = useState([])
    useEffect(()=>{
      fetch('http://localhost:8000/getTourData',{method: "GET", credentials: 'include'})
      .then((res=> res.json()))
      .then((data=> {
        setDA(data.data)
      }))
    },[])


    
    useEffect(()=>{
      if(isUserAuthenticated) fetch('http://localhost:8000/profile',{method: "GET", credentials: 'include'})
      .then((res=> res.json()))
      .then((data=> {
        
      }))
    },[])

    const [ site,setSite ] = useState( {
      totalEarnings: 0,
      totalBooked: 0,
    } )
    useEffect(()=>{
      fetch('http://localhost:8000/site',{method: "GET", credentials: 'include'})
      .then((res=> res.json()))
      .then((data=> {
        setSite(data.data)
      }))
    },[])
    const [ booking,setBooking ] = useState( [] )
    const [ comment,setComment ] = useState( [] )
    useEffect(()=>{
      fetch('http://localhost:8000/comment',{method: "GET", credentials: 'include'})
      .then((res=> res.json()))
      .then((data=> {
        setComment(data.data)
      }))
    },[])
    useEffect(()=>{
      fetch('http://localhost:8000/booking',{method: "GET", credentials: 'include'})
      .then((res=> res.json()))
      .then((data=> {
        const bookingData = data.data.map(user => ({ ...user, id: user._id })); 
        setBooking(bookingData) 
      }))
    },[])


    return(
      <Context.Provider value={ [pro , setPro , da , setDA , bookmarked , setBookmarked ,site , setSite , comment,setComment ,booking,setBooking ,userdata,setUserdata ] }>
      <>
           <div className='App-body'>
           {
                (!location.pathname.split("/").includes('admin'))?<Navbar/>:""
           }
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/tours' element={<Tour/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/card-view/:id' element={<CardView/>}/>
                <Route path='/registration-form-fillup' element={<Registration/>}/>
                <Route path='/admin' element={<Admin/>} />
                <Route path='//booked/:id' element={<Booked/>} />
                {isUserAuthenticated?<Route path='/profile' element={<Profile/>}/>:""}
                {adminStatus?<Route path='/admin/dashboard' element={<DashBoard/>} />:""}
                {adminStatus?<Route path='/admin/dashboard/user-data' element={<UserData/>} />:""}
                {adminStatus?<Route path='/admin/dashboard/tour-data' element={<TourData/>} />:""}
                {adminStatus?<Route path='/admin/dashboard/books' element={<Booking/>} />:""}
                {adminStatus?<Route path='/admin/dashboard/Packages' element={<Package/>} />:""}
                {adminStatus?<Route path='/admin/dashboard/User' element={<User/>} />:""}
            </Routes>
          </div>
      </>
      </Context.Provider>
    )

}

export default App

