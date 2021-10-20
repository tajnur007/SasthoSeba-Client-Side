import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import bannerImage from '../../resources/images/banners/doctors-banner.jpg';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('./db.json')
            .then(resp => resp.json())
            .then(data => setDoctors(data.doctors))
    }, []);

    // Handle View Doctor Details Button Click 
    const viewDoctorDetails = e => {
        const id = e.target.getAttribute('docId');
        history.push(`/doctor/${id}`);
    }

    return (
        <div>
            {/* Banner Image  */}
            <div className="mb-5">
                <img className="img-fluid" src={bannerImage} alt="" />
            </div>

            <div className="container">
                <Row xs={1} md={3} lg={3} className="g-5">
                    {doctors.map(data => (
                        <Col key={data.id}>
                            <Card className="simple-animation">
                                <div className="d-flex justify-content-center">
                                    <Card.Img variant="top" src={data.image} className="w-75 py-3" />
                                </div>
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {data.specialist}
                                    </Card.Text>
                                </Card.Body>
                                <Button onClick={viewDoctorDetails} docId={data.id} variant="outline-secondary">View Details</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        </div>
    );
};

export default Doctors;