import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import bannerImage from '../../resources/images/banners/aboutus-banner.jpg';
import stretcherImage from '../../resources/images/others/stretcher.png';
import doctorImage from '../../resources/images/others/doctor-icon.png';
import ambulanceImage from '../../resources/images/others/ambulance.png';
import aboutImage from '../../resources/images/others/about-us-2.jpg';
import doctorFemale from '../../resources/images/others/doctor-female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div>
            {/* Banner Image  */}
            <div className="mb-5">
                <img className="img-fluid" src={bannerImage} alt="" />
            </div>

            {/* Welcome Section  */}
            <div className="container">
                <h2 className="fw-bold"><span className="border-bottom pb-2 border-2 border-primary">Welcome to <span className="text-primary">SasthoSeba</span></span></h2>
                <p className="text-muted mx-5 px-5 pt-3">Sastho Seba is the first and largest innovative online healthcare startup, built with a mission to create a “one-stop” healthcare platform for Doctors and Users. Sastho Seba is created with a vision to provide easy access for mass people to the healthcare system. We are technologically driven with all medical needs.</p>
            </div>

            {/* What We Have Section  */}
            <div className="container">
                <h2 className="fw-bold text-primary pt-5 pb-4">What We Have?</h2>
                <Row xs={1} md={3} lg={3} className="g-5">
                    <Col>
                        <Card className="simple-animation">
                            <div className="d-flex justify-content-center">
                                <Card.Img variant="top" src={stretcherImage} className="w-75 py-3" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold">Modern Clinic</Card.Title>
                                <Card.Text className="text-muted">
                                    Modern Medical is a group of medical centres in Melbourne providing services in Dandenong, Craigieburn, Balwyn, Caroline Springs, Bayswater, and Glenroy.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="simple-animation">
                            <div className="d-flex justify-content-center">
                                <Card.Img variant="top" src={doctorImage} className="w-75 py-3" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold">Qualified Doctors</Card.Title>
                                <Card.Text className="text-muted">
                                    Qualified doctor definition: A doctor is someone who is qualified in medicine and treats people who are ill .
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="simple-animation">
                            <div className="d-flex justify-content-center">
                                <Card.Img variant="top" src={ambulanceImage} className="w-75 py-3" />
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold">Emergency Cases</Card.Title>
                                <Card.Text className="text-muted">
                                    An emergency is a situation that poses an immediate risk to health, life, property, or environment. Most emergencies require urgent intervention to prevent a worsening of the situation, although in some situations.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* Happiness is Nothing Section  */}
            <div className="container mt-5">
                <Row xs={1} md={2} lg={2} className="g-4">
                    <Col>
                        <img src={aboutImage} alt="" className="img-fluid" />
                    </Col>
                    <Col className="d-flex align-items-center text-start">
                        <div>
                            <h2>Happiness is nothing more than good health and a bad memory</h2>
                            <p className="text-muted">Sastho Seba is the first and largest innovative online healthcare startup, built with a mission to create a “one-stop” healthcare platform for Doctors and Users. Sastho Seba is created with a vision to provide easy access for mass people to the healthcare system. We are technologically driven with all medical needs.</p>
                            <Button variant="primary">LEARN MORE</Button>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Toll Contact Section  */}
            <div className="container my-5 d-flex">
                <div className="d-none d-sm-none d-md-block col-4">
                    <img src={doctorFemale} alt="" />
                </div>
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                    <div>
                        <h2>We are constantly evaluating and implementing ways to improve patient safety.</h2>
                        <h5 className="text-muted py-3">Please speak up when you have questions or concerns.</h5>
                        <h2 className="text-primary"><FontAwesomeIcon icon={faPhoneAlt} /> 01721-919296</h2>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;