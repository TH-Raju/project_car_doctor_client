import React from 'react';
import About from './About';
import Banner from './Banner';
import Products from './Products';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Products />
        </div>
    );
};

export default Home;