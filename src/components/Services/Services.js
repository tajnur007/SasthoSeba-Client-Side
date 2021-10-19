import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import bannerImage from '../../resources/images/banners/services-banner.jpg';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./db.json')
            .then(resp => resp.json())
            .then(data => setServices(data.services))
    }, []);


    return (
        <div>
            {/* Banner Image  */}
            <div className="mb-5">
                <img className="img-fluid" src={bannerImage} alt="" />
            </div>

            <div className="container">
                <Row xs={1} md={3} lg={3} className="g-5">
                    {services.map(data => (
                        <Col>
                            <Card className="simple-animation">
                                <div className="d-flex justify-content-center">
                                    <Card.Img variant="top" src={data.image} className="w-75 py-3" />
                                </div>
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {data.descp}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    );
};

export default Services;