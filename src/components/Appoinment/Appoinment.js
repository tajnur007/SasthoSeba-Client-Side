import React from 'react';
import bannerImage from '../../resources/images/banners/appoinment-banner.jpg';

const Appoinment = () => {
    return (
        <div>
            {/* Banner Image  */}
            <div>
                <img className="img-fluid" src={bannerImage} />
            </div>

        </div>
    );
};

export default Appoinment;