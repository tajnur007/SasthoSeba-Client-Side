import React, { useState } from 'react';
import companyLogo from '../../resources/images/company/sastho-seba-full-image.png';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import initializeAuthentication from '../../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Firebase Initialization 
initializeAuthentication();

// All Firebase Auth Providers 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const Login = () => {
    // All States 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    // Method for Getting Email 
    const handleEmailInputChange = e => {
        setEmail(e.target.value);
    }

    // Method for Getting Password
    const handlePasswordInputChange = e => {
        setPassword(e.target.value);
    }

    // Toggling Method for Login or Signup 
    const togleLogin = e => {
        setIsLogin(e.target.checked);
    }

    // Method for Google Signin
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
    }

    // Method for Github Signin
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
    }

    // Method for Email-Password Signup
    const handleEmailPasswordSignup = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
    }

    // Method for Email-Password Login
    const handleEmailPasswordLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
    }

    return (
        <div>
            <div className="container container--mini my-5">
                {/* Company Logo  */}
                <img className="img-fluid mx-auto d-block mt-5" src={companyLogo} alt="" />

                {/* Welcome Message  */}
                <h2 className="my-3 fw-bold text-muted">Welcome User! <br /> Please {isLogin ? 'login to your account' : 'create an account'} </h2>

                {/* Login / Signup Form  */}
                <form className="d-flex justify-content-center">

                    <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        {/* Email Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_login">Email</label>
                            <input type="email" onChange={handleEmailInputChange} className="form-control" placeholder="Put your email address here" required />
                        </div>

                        {/* Password Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_pass">Password</label>
                            <input type="password" onChange={handlePasswordInputChange} className="form-control" placeholder="Put your password here" required />
                        </div>

                        {/* Already Registered Check  */}
                        <p className="login-remember text-start mx-5 mb-3">
                            <label><input type="checkbox" onChange={togleLogin} /> Already Registered?</label>
                        </p>

                        {/* Login / Signup Button  */}
                        <div className="form-group text-start mx-5">
                            <Button onClick={isLogin ? handleEmailPasswordLogin : handleEmailPasswordSignup} type="submit" className="btn btn-primary btn-block w-100 mb-4">
                                {isLogin ? <FontAwesomeIcon icon={faSignInAlt} /> : <FontAwesomeIcon icon={faUserPlus} />} {isLogin ? 'Login' : 'Sign up'}
                            </Button>
                        </div>

                        <p>OR</p>

                        {/* Google Login Button  */}
                        <div className="form-group text-start mx-5">
                            <Button onClick={handleGoogleSignIn} variant="outline-success" className="w-100 mb-4">
                                <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                            </Button>
                        </div>

                        {/* Github Login Button  */}
                        <div className="form-group text-start mx-5">
                            <Button onClick={handleGithubSignIn} variant="outline-secondary" className="w-100 mb-4">
                                <FontAwesomeIcon icon={faGithub} /> Sign in with Github
                            </Button>
                        </div>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Login;