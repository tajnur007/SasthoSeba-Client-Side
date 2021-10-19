import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./db.json')
            .then(resp => resp.json())
            .then(data => setServices(data.services))
    }, []);


    return (
        <div className="container">
            <h1 className="my-5">ALL OF OUR SERVICES</h1>
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
    );
};

export default Services;