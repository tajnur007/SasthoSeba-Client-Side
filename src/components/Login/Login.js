import React, { useState } from 'react';
import companyLogo from '../../resources/images/company/sastho-seba-full-image.png';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    // All States 
    const [isLogin, setIsLogin] = useState(false);

    // Toggling Method for Login or Signup 
    const togleLogin = e => {
        setIsLogin(e.target.checked);
    }

    return (
        <div>
            <div className="container container--mini my-5">
                {/* Company Logo  */}
                <img className="img-fluid mx-auto d-block mt-5" src={companyLogo} alt="" />

                {/* Welcome Message  */}
                <h2 className="my-3 fw-bold text-muted">Welcome User! <br /> Please {isLogin ? 'login to your account' : 'create an account'} </h2>

                {/* Login / Signup Form  */}
                <div className="d-flex justify-content-center">

                    <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        {/* Email Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_login">Email</label>
                            <input type="text" name="log" id="user_login" className="form-control" value="" size="20" placeholder="Put your email address here" required />
                        </div>

                        {/* Password Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_pass">Password</label>
                            <input type="password" name="pwd" id="user_pass" className="form-control" value="" size="20" placeholder="Put your password here" required />
                        </div>

                        {/* Already Registered Check  */}
                        <p className="login-remember text-start mx-5 mb-3">
                            <input type="checkbox" onChange={togleLogin} /> Already Registered?
                        </p>

                        {/* Login / Signup Button  */}
                        <div className="form-group text-start mx-5">
                            <Button className="btn btn-primary btn-block w-100 mb-4">
                                {isLogin ? <FontAwesomeIcon icon={faSignInAlt} /> : <FontAwesomeIcon icon={faUserPlus} />} {isLogin ? 'Login' : 'Sign up'}
                            </Button>
                        </div>

                        <p>OR</p>

                        {/* Google Login Button  */}
                        <div className="form-group text-start mx-5">
                            <Button variant="outline-success" className="w-100 mb-4">
                                <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                            </Button>
                        </div>

                        {/* Github Login Button  */}
                        <div className="form-group text-start mx-5">
                            <Button variant="outline-secondary" className="w-100 mb-4">
                                <FontAwesomeIcon icon={faGithub} /> Sign in with Github
                            </Button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;