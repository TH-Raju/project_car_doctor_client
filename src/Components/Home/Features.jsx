import React from 'react';
import icon1 from '../../assets/icons/group.svg'
import icon3 from '../../assets/icons/person.svg'
import icon4 from '../../assets/icons/Wrench.svg'
import icon5 from '../../assets/icons/check.svg'
import icon6 from '../../assets/icons/deliveryt.svg'

const Features = () => {
    return (
        <div className='my-32 mb-36'>
            <div className='text-center mb-8'>
                <p className="text-2xl font-bold text-orange-600">Core Features</p>
                <h2 className='text-5xl font-semibold my-6'>Why Choose Us</h2>
                <p className='w-1/2 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly Believable.</p>
            </div>
            <div className='flex flex-wrap justify-around items-center gap-5'>
                <div className="card card-compact w-96 p-2 hover:bg-orange-700 hover:text-white shadow-xl">
                    <figure><img src={icon1} alt="Shoes" className='bg-white rounded-xl p-2' /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Expert Team</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 p-2 hover:bg-orange-700 hover:text-white shadow-xl">
                    <figure><img src={icon5} alt="Shoes" className='bg-white rounded-xl p-2' /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Timely Delivery</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 p-2 hover:bg-orange-700 hover:text-white shadow-xl">
                    <figure><img src={icon3} alt="Shoes" className='bg-white rounded-xl p-2' /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">24/7 Support</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 p-2 hover:bg-orange-700 hover:text-white shadow-xl">
                    <figure><img src={icon4} alt="Shoes" className='bg-white rounded-xl p-2' /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Best Equipment</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 p-2 hover:bg-orange-700 hover:text-white shadow-xl">
                    <figure><img src={icon5} alt="Shoes" className='bg-white rounded-xl p-2' /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">100% Guranty</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 p-2 hover:bg-orange-700 hover:text-white shadow-xl">
                    <figure><img src={icon6} alt="Shoes" className='bg-white rounded-xl p-2' /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Timely Delivery</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;