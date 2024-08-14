/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Home.css';
import MasonryImagesGallery from './Gallery';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Context } from '../../App.jsx';

/* HOME SLIDE SHOW IMAGES */
import goa from '../res/goa.jpg';
import taj from '../res/taj.jpg';
import paris from '../res/pairs.jpg';

/* Feedback Profile image */
import profile1 from '../res/profilePic/Arghya_Adhikari.jpg';
import profile2 from '../res/profilePic/Rahul_Mandal.jpeg';

/* CIRCLE DECORATION IMAGES */
import box_1_1 from '../res/box-1-1.jpg';
import box_1_2 from '../res/box-1-2.jpg';
import box_1_3 from '../res/box-1-3.jpg';

import box_2_1 from '../res/box-2-1.jpg';
import box_2_2 from '../res/box-2-2.jpg';
import box_2_3 from '../res/box-2-3.jpg';

import box_3_1 from '../res/box-3-1.jpg';
import box_3_2 from '../res/box-3-2.jpg';
import box_3_3 from '../res/box-3-3.jpg';

import timeIcon from '../res/icon/timeIcon.png';

const images = [goa, taj, paris];
const box1 = [box_1_1, box_1_2, box_1_3];
const box2 = [box_2_1, box_2_2, box_2_3];
const box3 = [box_3_1, box_3_2, box_3_3];
const text = ["12k+ Successful trips", "2k+ Regular clients", "15 Years experience"];

const Home = () => {
    const [homeSlideBox, setHomeSlideBox] = useState(0);
    const [box1Image, setBox1Image] = useState(0);
    const [box2Image, setBox2Image] = useState(0);
    const [box3Image, setBox3Image] = useState(0);
    const [textt, setTextt] = useState(0);
    const [da, setDA] = useState([]);
    const [error, setError] = useState(null);

    const token = Cookies.get('auth_token');
    const isUserAuthenticated = !!token;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHomeSlideBox((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBox1Image((prevIndex) => (prevIndex + 1) % box1.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBox2Image((prevIndex) => (prevIndex + 1) % box2.length);
        }, 3500);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBox3Image((prevIndex) => (prevIndex + 1) % box3.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextt((prevIndex) => (prevIndex + 1) % text.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const response = await fetch('http://localhost:8000/getTourData', { method: "GET", credentials: 'include' });
                const data = await response.json();
                setDA(data.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchTourData();
    }, []);

    return (
        <>
            <div className="home-body">
                <div className='slide-content'>
                    <img className='slide-img' src={images[homeSlideBox]} alt={`Slide ${homeSlideBox + 1}`} />
                </div>
                <div className='slide-img-dark'>
                    <h1>TRAVEL is in TROUBLE<br />Make your DREAM TRIP with US</h1>
                </div>

                <div className='home-sec-1'>
                    <div className='left-content'>
                        <h1><span>Traveling</span> opens the door to creating <span>memories</span></h1>
                        <h2 style={{ textAlign: 'center', paddingRight: '150px', fontWeight: '900', color: '#525252' }}>
                            We archive <p style={{ fontSize: '40px', fontWeight: '800', color: '#525252' }}>{text[textt]}</p>
                        </h2>
                    </div>
                    <div className='right-content'>
                        <div className='img-box img-box-1'>
                            <img className='circle-img' src={box1[box1Image]} alt={`Slide ${box1Image + 1}`} />
                        </div>
                        <div className='img-box img-box-2'>
                            <img className='circle-img' src={box2[box2Image]} alt={`Slide ${box2Image + 1}`} />
                        </div>
                        <div className='img-box img-box-3'>
                            <img className='circle-img' src={box3[box3Image]} alt={`Slide ${box3Image + 1}`} />
                        </div>
                    </div>
                </div>

                <div className='home-sec-2'>
                    <h2>Most <span>Popular</span> Tourist Places to Visit</h2>
                    <div className='prop-cards'>
                        {error && <p>{error}</p>}
                        {da.slice(0, 4).map((item) => (
                            <div key={item._id} className='card-view'>
                                <h3 style={{ fontWeight: '800', color: '#525252' }}>{item.place}</h3>
                                <img src={item.image} alt={item.place} />
                                <div className='card-details'>
                                    <h5 className='duration' style={{ fontWeight: '900', color: '#525252', fontSize: '17px' }}>
                                        <img style={{ width: '20px', height: '20px', marginBottom: '4px', marginRight: '5px' }} src={timeIcon} alt="time icon" />
                                        {item.duration} Days
                                    </h5>
                                    <h5 className='price' style={{ fontWeight: '900', color: '#525252', fontSize: '17px' }}>{item.price}/- Per person</h5>
                                </div>
                                <Link className='card-view-btn' to={isUserAuthenticated ? `/card-view/${item._id}` : '/login'}>View Details</Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='home-sec-3'>
                    <h2><span>G</span>a<span>LL</span>ery</h2>
                    <MasonryImagesGallery />
                </div>

                <div className='home-sec-4'>
                    <h1>What <span>our fan</span> say about <span>us</span></h1>
                    <div className='feedbacks'>
                        <div className='feedback feed-back-1'>
                            <div className='prof prof-1'>
                                <img className='feed-back-profile-img' src={profile1} alt="profile1" />
                                <h6><b>Arghya Adhikari<br />Rating - 5/5</b></h6>
                            </div>
                            <div className='feed-1'>
                                <p>Transportation was comfortable, and the driver was very professional and courteous. The tour bus was clean and well-maintained, making the long drives between destinations very pleasant and enjoyable.</p>
                            </div>
                        </div>
                        <div className='feedback feed-back-2'>
                            <div className='prof prof-1'>
                                <img className='feed-back-profile-img' src={profile2} alt="profile2" />
                                <h6><b>Rahul Mandal<br />Rating - 5/5</b></h6>
                            </div>
                            <div className='feed-1'>
                                <p>The group size was perfect, not too crowded, which made the experience more enjoyable. It allowed for more personalized attention from the guide and a more intimate exploration of each site.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
