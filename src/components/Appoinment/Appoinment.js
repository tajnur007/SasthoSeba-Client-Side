import React from 'react';
import bannerImage from '../../resources/images/banners/appoinment-banner.jpg';

const Appoinment = () => {
    return (
        <div>
            {/* Banner Image  */}
            <div>
                <img className="img-fluid" src={bannerImage} alt="" />
            </div>

            <div className="bg-primary">
                <div className="container py-5">
                    <form>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 pe-5">
                                <div className="form-group">
                                    <input type="text" className="form-control my-2" id="id_name" placeholder="Name" required />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 ps-5">
                                <div className="form-group">
                                    <input type="email" className="form-control my-2" id="id_email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 pe-5">
                                <div className="form-group">
                                    <input type="text" className="form-control my-2" id="id_phone_number" placeholder="Phone Number" required />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 ps-5">
                                <div className="form-group">
                                    <select className="form-control my-2">
                                        <option>Department</option>
                                        <option>Cardiology</option>
                                        <option>Neurology</option>
                                        <option>Orthopedics</option>
                                        <option>Radiology</option>
                                        <option>Surgery</option>
                                        <option>Urology</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 pe-5">
                                <div className="form-group">
                                    <select className="form-control my-2">
                                        <option>Doctor</option>
                                        <option>Dr. Anym Jackson</option>
                                        <option>Dr. Mark Jacobson</option>
                                        <option>Dr. Alex Davidson</option>
                                        <option>Dr. Jaka Alex</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 ps-5">
                                <div className="form-group">
                                    <input type="date" className="form-control my-2" id="datepicker" placeholder="" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control my-2" id="message" rows="4" placeholder="Message" required ></textarea>
                        </div>
                        <button type="submit" className="btn btn-light mt-3">BOOK NOW</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Appoinment;