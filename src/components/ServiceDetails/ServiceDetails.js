import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    // All States 
    const [service, setService] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    // Data Load 
    useEffect(() => {
        fetch('../db.json')
            .then(resp => resp.json())
            .then(data => {
                const serviceObj = data.services.find(service => service.id === id);
                setService(serviceObj);
                console.log(serviceObj);
            })
    }, [id]);

    // Data Extraction 
    const { name, descp, image } = service;

    // Jump to All services Page 
    const viewAllservices = () => {
        history.push('/services');
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <Card className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <h2 className="pt-3 fw-bold">{name}</h2>
                <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={image} className="w-75 py-3" />
                </div>
                <p className="text-muted">
                    {descp}
                </p>
                <Button onClick={viewAllservices} variant="primary">View All services</Button>
            </Card>
        </div>
    );
};

export default ServiceDetails;