import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import companyLogo from '../../resources/images/company/sastho-seba-full-image.png';

const Header = () => {
    return (
        <div className="sticky-top shadow-sm white-transparent">
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
                    <NavLink exact to="/faq" activeClassName="selected" className="nav-item">
                        FAQ
                    </NavLink>
                    <NavLink exact to="/contacts" activeClassName="selected" className="nav-item">
                        Contact Us
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Header;