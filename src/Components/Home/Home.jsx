import React from 'react';
import About from './About';
import Banner from './Banner';
import Features from './Features';
import Products from './Products';
import Services from './Services';
import Team from './Team';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Products />
            <Team />
            <Features />
            <Testimonial />
        </div>
    );
};

export default Home;