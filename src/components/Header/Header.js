import React, { useContext } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import companyLogo from '../../resources/images/company/sastho-seba-full-image.png';
import { UserNameContext } from '../../App';
import { Button } from 'react-bootstrap';

const Header = () => {

    const { userName } = useContext(UserNameContext);

    return (
        <div className="sticky-top shadow bg-light">
            <div className="container d-flex justify-content-between">
                {/* Company Name and Logo  */}
                <div>
                    <Link to="/"><img src={companyLogo} alt="company logo" id="company-logo" /></Link>
                </div>

                {/* Nav Items  */}
                <div className="d-flex align-items-center">
                    <NavLink exact to="/" activeClassName="selected" className="nav-item">
                        Home
                    </NavLink>
                    <NavLink exact to="/services" activeClassName="selected" className="nav-item">
                        Services
                    </NavLink>
                    <NavLink exact to="/doctors" activeClassName="selected" className="nav-item">
                        Doctors
                    </NavLink>
                    <NavLink exact to="/appoinment" activeClassName="selected" className="nav-item">
                        Appoinment
                    </NavLink>
                    <NavLink exact to="/about" activeClassName="selected" className="nav-item">
                        About
                    </NavLink>
                    <NavLink exact to="/contacts" activeClassName="selected" className="nav-item">
                        Contact Us
                    </NavLink>
                    <div className="border-start ms-2 px-2 border-2">
                        {
                            userName.userName ? <span className="text-primary pe-2">{userName.userName}</span> : ''
                        }
                        {
                            userName.userName ?
                                < Button variant="primary">Logout</Button>
                                :
                                <NavLink exact to="/login" activeClassName="selected" className="nav-item">
                                    Login / Signup
                                </NavLink>
                        }
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Header;