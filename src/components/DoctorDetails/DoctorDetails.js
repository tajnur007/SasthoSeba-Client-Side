import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const DoctorDetails = () => {
    // All States 
    const [doctor, setDoctor] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    // Data Load 
    useEffect(() => {
        fetch('../db.json')
            .then(resp => resp.json())
            .then(data => {
                const doctorObj = data.doctors.find(doctor => doctor.id === id);
                setDoctor(doctorObj);
                console.log(doctorObj);
            })
    }, [id]);

    // Data Extraction 
    const { name, specialist, email, phone, image } = doctor;

    // Jump to All Doctors Page 
    const viewAllDoctors = () => {
        history.push('/doctors');
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <Card className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <h2 className="pt-3 fw-bold">{name}</h2>
                <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={image} className="w-75 py-3" />
                </div>
                <h4 className="text-muted fw-bold">{specialist}</h4>
                <p>
                    Email: {email} <br />
                    Phone: {phone}
                </p>
                <Button onClick={viewAllDoctors} variant="primary">View All Doctors</Button>
            </Card>
        </div>
    );
};

export default DoctorDetails;