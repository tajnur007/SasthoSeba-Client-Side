import React from 'react';
import bannerImage from '../../resources/images/banners/aboutus-banner.jpg';

const About = () => {
    return (
        <div>
            {/* Banner Image  */}
            <div>
                <img className="img-fluid" src={bannerImage} alt="" />
            </div>

        </div>
    );
};

export default About;