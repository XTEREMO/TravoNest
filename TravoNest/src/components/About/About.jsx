/* eslint-disable no-unused-vars */
import React from "react";
import './About.css'

import saftyIcon from '../res/icon/secquirity.png'
import guideIcon from '../res/icon/guid.png'
import customizationIcon from '../res/icon/customized.png'
import aboutP1 from '../res/icon/aboutP1.png'
import Footer from '../Footer/Footer'
import Navbar from "../Navbar/Navbar";


const About = () => {
  return (
    <>
        <div className="about-container">
                    <div className="about-body">
                                    <p className="about-head-p">TravoNest, this is a new venture of XteremO Pvt Ltd which got established in 2024. We specialize in offering inbound and outbound tours from India, to our wide variety of customers. Our goal is to provide you with an unforgettable experience of the destination of your choice. We strongly believe in providing top-notch customer service and engaging with each of our travelers personally. That’s why we strive to provide you with a personal travel experience, from start to finish. Our customer service team is available 24/7 to help you with any queries or issues you may have before, during, or after your trip. You can rest assured that our team will always be there to provide assistance whenever needed.</p>
                                    
                                    
                                    
                                    <div className="about-sec-1">
                                                    <div className="about-pic-1">
                                                      <img src={aboutP1}/>
                                                    </div>
                                                    <h2>We offer our best service</h2>
                                                    <div className="weather">
                                                        <div className="image-box image-box-1">
                                                            <img src={saftyIcon} />
                                                        </div>
                                                        <h5>Safty Protocols</h5>
                                                        <p>We ensure to provide you safe and<br/> secquire journy from begining to end .<br/></p>
                                                    </div>
                                                    <div className="guide">
                                                        <div className="image-box image-box-2">
                                                            <img src={guideIcon} />
                                                        </div>
                                                        <h5>Guide</h5>
                                                        <p>We have our best guide who provide you<br/>wonderful experience throughout the journy</p>
                                                    </div>
                                                    <div className="customization">
                                                        <div className="image-box image-box-3">
                                                            <img src={customizationIcon} />
                                                        </div>
                                                        <h5>Customization</h5>
                                                        <p>You can customize your tour by your own<br/>and enjoy your journy without any interfere</p>
                                                    </div>
                                    </div>




                                    <div className='about-sec-2'>
                                                    <div className="about-sec-2-row-1">
                                                            <div className="sec-2-row-1-content sec-2-content-1">
                                                              <h2>Our <span>Mission</span></h2>
                                                              <div className="p-container-1">
                                                                <p>Our mission is to make travel accessible and enjoyable for
                                                                 everyone. We strive to offer the best deals on flights, hotels,
                                                                 and vacation packages, and to provide top-notch customer service
                                                                 to ensure a smooth travel experience.</p>
                                                              </div>
                                                            </div>
                                                            <div className="sec-2-row-1-content sec-2-content-2">
                                                              <h2>Our <span>Vision</span></h2>
                                                              <div className="p-container-1">
                                                                 <p>Our vision is to be the leading travel company, known for our
                                                                 commitment to excellence and our passion for travel. We aim to
                                                                 inspire people to explore new destinations and to create
                                                                 unforgettable travel experiences.</p>
                                                              </div>
                                                            </div>
                                                    </div>



                                                    <div className="about-sec-2-row-2">
                                                            <div className="sec-2-row-2-content sec-2-content-1">
                                                              <h2> <span>Quality</span> Service</h2>
                                                              <div className="p-container-2">
                                                                <p>We believe in providing the highest quality of service to our
                                                                   customers. Our team is available 24/7 to assist you with any
                                                                   travel-related inquiries or issues related to travel.</p>
                                                              </div>
                                                            </div>
                                                            <div className="sec-2-row-2-content sec-2-content-2">
                                                              <h2><span>Experienced</span> Team</h2>
                                                              <div className="p-container-2">
                                                                 <p>Our team of travel experts has years of experience in the
                                                                    industry. We use our knowledge and expertise to help you plan
                                                                    the perfect trip, tailored to your preferences and budget.</p>
                                                              </div>
                                                            </div>
                                                            <div className="sec-2-row-2-content sec-2-content-2">
                                                              <h2>Customer <span>Satisfaction</span></h2>
                                                              <div className="p-container-2">
                                                                 <p>Customer satisfaction is our top priority. We go above and
                                                                    beyond to ensure that our customers are happy with their travel
                                                                    experiences. Your feedback is important to us.</p>
                                                              </div>
                                                            </div>
                                                    </div>
                                    </div>
                    </div>
        </div>
        <Footer/>
    </>
  );
};

export default About;


/*
      <Row className="mb-4">
        <Col md="4">
          <Card className="equal-card">
            <CardBody>
              <CardTitle tag="h5">Quality Service</CardTitle>
              <CardText>
                We believe in providing the highest quality of service to our
                customers. Our team is available 24/7 to assist you with any
                travel-related inquiries or issues related to travel.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="equal-card">
            <CardBody>
              <CardTitle tag="h5">Experienced Team</CardTitle>
              <CardText>
                Our team of travel experts has years of experience in the
                industry. We use our knowledge and expertise to help you plan
                the perfect trip, tailored to your preferences and budget.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="equal-card">
            <CardBody>
              <CardTitle tag="h5">Customer Satisfaction</CardTitle>
              <CardText>
                Customer satisfaction is our top priority. We go above and
                beyond to ensure that our customers are happy with their travel
                experiences. Your feedback is important to us.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="service_title">We offer our best service</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
    </Container>
*/