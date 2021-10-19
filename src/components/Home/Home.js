import React, { useEffect, useState } from 'react';
import './Home.css';
import { Card, Carousel, Col, Row, Button } from 'react-bootstrap';
import carousel1 from '../../resources/images/banners/1.jpg';
import carousel2 from '../../resources/images/banners/2.jpg';
import carousel3 from '../../resources/images/banners/3.jpg';
import wh1 from '../../resources/images/others/wh-1.jpg';
import wh2 from '../../resources/images/others/wh-2.jpg';
import wh3 from '../../resources/images/others/wh-3.jpg';
import aboutImg from '../../resources/images/others/about-us.jpg';
import doctor from '../../resources/images/doctors/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./db.json')
            .then(resp => resp.json())
            .then(data => setServices(data.services))
    }, []);

    return (
        <div>
            {/* Image Slider Carousel  */}
            <Carousel fade>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="text-dark fw-bold">We Always Care Your Health</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h1 className="text-dark fw-bold">Best Care & Better Doctor</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h1 className="text-dark fw-bold">We Provide Total Health Care Solution</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* What We Have Section  */}
            <div className="container">
                <h1 className="fw-bold my-5">What We Have?</h1>

                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card className="simple-animation">
                            <Card.Img variant="top" src={wh1} />
                            <Card.Body>
                                <Card.Title>Emergency Care</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="simple-animation">
                            <Card.Img variant="top" src={wh2} />
                            <Card.Body>
                                <Card.Title>Qualified Doctors</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="simple-animation">
                            <Card.Img variant="top" src={wh3} />
                            <Card.Body>
                                <Card.Title>24/7 Hours Service</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>

            {/* 50 Years of Experience in Medical Section  */}
            <div className="container mt-5">
                <Row xs={1} md={2} lg={2} className="g-4">
                    <Col>
                        <img src={aboutImg} className="img-fluid" />
                    </Col>
                    <Col className="d-flex align-items-center text-start">
                        <div>
                            <h2>50 Years of Experience in Medical</h2>
                            <p>Sastho Seba is the first and largest innovative online healthcare startup, built with a mission to create a “one-stop” healthcare platform for Doctors and Users. Sastho Seba is created with a vision to provide easy access for mass people to the healthcare system. We are technologically driven with all medical needs.</p>
                            <Button variant="primary">ABOUT US</Button>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Our Services Section  */}
            <div className="container mt-5">
                <h1 className="py-4">Our Services</h1>

                <Row xs={1} md={3} lg={4} className="g-4">
                    {services.map(data => (
                        <Col>
                            <Card className="simple-animation">
                                <div className="d-flex justify-content-center">
                                    <Card.Img variant="top" src={data.image} className="w-25 py-3" />
                                </div>
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {data.shDescp}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>

            {/* Toll Contact Section  */}
            <div className="container my-5 d-flex">
                <div className="d-none d-sm-none d-md-block col-4">
                    <img src={doctor} alt="" />
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

export default Home;