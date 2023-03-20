import React from 'react';
import img1 from '../../assets/images/team/1.jpg';
import img2 from '../../assets/images/team/2.jpg';
import img3 from '../../assets/images/team/3.jpg';

const Team = () => {
    return (
        <div className='my-32'>
            <div className='text-center mb-8'>
                <p className="text-2xl font-bold text-orange-600">Team</p>
                <h2 className='text-5xl font-semibold my-6'>Meet Our Team</h2>
                <p className='w-1/2 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly Believable.</p>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center -mt-3">
                    <h2 className="card-title">James Ben</h2>
                    <p>Enginee Expert</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;