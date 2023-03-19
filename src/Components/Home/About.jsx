import React from 'react';
import parts from '../../assets/images/about_us/parts.jpg';
import person from '../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row md:gap-24">
                <div className='md:w-1/2 w-3/4 relative m-3'>
                    <img src={person} className="md:w-4/5 w-full h-full rounded-lg shadow-2xl" alt='person' />
                    <img src={parts} className="absolute md:w-3/5 w-3/4 md:right-6 right-0 border-8 top-3/4 rounded-lg shadow-2xl" alt='parts' />
                </div>
                <div className='md:w-1/2 w-5/6 mt-20'>
                    <p className="text-2xl text-orange-700">About Us</p>
                    <h1 className="md:text-5xl text-3xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary bg-orange-700 hover:bg-orange-700 border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;