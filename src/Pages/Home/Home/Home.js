import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <h1 className='my-28 font-bold text-center text-4xl'>Why Us</h1>
            <About></About>
        </div>
    );
};

export default Home;