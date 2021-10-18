import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../resources/images/Doctors/1.jpg';
import carousel2 from '../../resources/images/Doctors/2.jpg';
import carousel3 from '../../resources/images/Doctors/3.jpg';

const Home = () => {
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
                        <h1 className="text-dark">We Always Care Your Health</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h1 className="text-dark">Best Care & Better Doctor</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h1 className="text-dark">We Provide Total Health Care Solution</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



        </div>
    );
};

export default Home;