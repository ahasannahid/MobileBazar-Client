import React from 'react';
import img from '../../../Assets/download.jpg'

const About = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl my-20">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">About Ourself</h2>
                <p>Here you can sell your old phone. you also can buy a phone . All that privacy we given our customer. we give our service from last 7 years. </p>
            </div>
        </div>
    );
};

export default About;