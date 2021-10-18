import React from 'react';
import './NotFound.css';
import image404 from '../../resources/images/others/404.gif';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();

    const handleReturnHome = () => {
        history.push("/");
    }

    return (
        <div>
            <div> <img id="image-404" src={image404} alt="404 gif image" /> </div>
            <h2 className="fw-bold">Oops! Page Not Found</h2>
            <p className="text-muted">The page you were looking for could not be found.</p>
            <div>
                <Button varient="primary" onClick={handleReturnHome}>RETURN HOME</Button>
            </div>
        </div>
    );
};

export default NotFound;