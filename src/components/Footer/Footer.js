import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import companyLogo from '../../resources/images/company/sastho-seba-full-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer className="pt-5">
                <div className="container">
                    <div className="row">
                        {/* First Section  */}
                        <div className="col-sm-12 col-md-12 col-lg-4 text-start">
                            {/* Company Logo with Name  */}
                            <Link exact to="/">
                                <img src={companyLogo} alt="Logo" className="pb-3" />
                            </Link>

                            {/* Short Description  */}
                            <p className="text-muted">Sastho Seba is an online medical service provider portal aimed increase the comfort and convenience of people wanting to get services quickly through online. Visit "About Us" page to know more about Med Pharma. </p>

                            {/* Social Icons  */}
                            <div>
                                <Link exact to="/" className="">
                                    <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                                </Link>
                                <Link exact to="/" className="">
                                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                                </Link>
                                <Link exact to="/" className="">
                                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                                </Link>
                                <Link exact to="/" className="">
                                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                                </Link>
                            </div>
                        </div>

                        {/* Second Section  */}
                        <div className="col-sm-6 col-md-4 col-lg-2 text-start">
                            <h3>Quick Links</h3>
                            <Link exact to="/" className="footer-links">Home</Link> <br />
                            <Link exact to="/services" className="footer-links">Services</Link> <br />
                            <Link exact to="/doctors" className="footer-links">Doctors</Link> <br />
                            <Link exact to="/appoinment" className="footer-links">Appoinment</Link> <br />
                            <Link exact to="/about" className="footer-links">About Us</Link> <br />
                            <Link exact to="/contacts" className="footer-links">Contact Us</Link> <br />
                        </div>

                        {/* Third Section  */}
                        <div className="col-sm-6 col-md-4 col-lg-3 text-start">
                            <h3>Departments</h3>
                            <Link exact to="/" className="footer-links">Cardiology</Link> <br />
                            <Link exact to="/" className="footer-links">Neurology</Link> <br />
                            <Link exact to="/" className="footer-links">Orthopedics</Link> <br />
                            <Link exact to="/" className="footer-links">Radiology</Link> <br />
                            <Link exact to="/" className="footer-links">Surgery</Link> <br />
                            <Link exact to="/" className="footer-links">Urology</Link> <br />
                        </div>

                        {/* Fourth Section  */}
                        <div className="col-sm-12 col-md-4 col-lg-3 text-start">
                            <h3>Contact Us</h3>

                            <p className="text-muted"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" /> 343, BIDC Bazar, DUET, Gazipur, Bangladesh.</p>

                            <p className="text-muted"><FontAwesomeIcon icon={faPhoneAlt} className="text-primary" /> 01721-919296</p>

                            <p className="text-muted"><FontAwesomeIcon icon={faEnvelope} className="text-primary" /> info@sasthoseba.com.bd</p>
                        </div>

                    </div>

                    {/* Separate Line  */}
                    <div className="separate-line my-5"></div>

                    {/* Footer Lower Section  */}
                    <div className="row mb-5 ">
                        <div className="col-md-6 col-lg-6 text-start text-muted">
                            Copyright @ 2021, SasthoSeba. All rights reserved.
                        </div>
                        <div className="col-md-6 col-lg-6 text-end">
                            <Link exact to="/" className="footer-links pe-3">Privac Policy</Link>
                            <Link exact to="/" className="footer-links">Terms &amp; Conditions</Link>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;