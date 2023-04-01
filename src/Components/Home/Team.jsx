import React from 'react';
import img1 from '../../assets/images/team/1.jpg';
import img2 from '../../assets/images/team/2.jpg';
import img3 from '../../assets/images/team/3.jpg';
import fb from '../../assets/icons/sm/fb.png'
import twit from '../../assets/icons/sm/twitter.png'
import ln from '../../assets/icons/sm/ln.png'
import insta from '../../assets/icons/sm/insta.png'
import { Link } from 'react-router-dom';


const Team = () => {
    return (
        <div className='my-32'>
            <div className='text-center mb-8'>
                <p className="text-2xl font-bold text-orange-600">Team</p>
                <h2 className='text-5xl font-semibold my-6'>Meet Our Team</h2>
                <p className='w-1/2 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly Believable.</p>
            </div>
            <div className='flex flex-wrap justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">James Ben</h2>
                        <p>Repair Expert</p>
                        <div className="card-actions">
                            <button className="">
                                <Link to="https://www.facebook.com"><img src={fb} alt="fb" className='h-7 w-7' /></Link>
                            </button>
                            <button className="">
                                <Link to="https://www.twitter.com"><img src={twit} alt="twitter" className='h-7 w-7' /></Link>
                            </button>
                            <button className="">
                                <Link to="https://www.linkedin.com"><img src={ln} alt="linkedin" className='h-7 w-7' /></Link>
                            </button>
                            <button className="">
                                <Link to="https://www.instagram.com"> <img src={insta} alt="instagram" className='h-7 w-7' /></Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">Jonson Roy</h2>
                        <p>Enginee Expert</p>
                        <div className="card-actions">
                            <button className="">
                                <Link to="https://www.facebook.com"><img src={fb} alt="fb" className='h-7 w-7' /></Link>
                            </button>
                            <button className="">
                                <Link to="https://www.twitter.com"><img src={twit} alt="twitter" className='h-7 w-7' /></Link>
                            </button>
                            <button className="">
                                <Link to="https://www.linkedin.com"><img src={ln} alt="linkedin" className='h-7 w-7' /></Link>
                            </button>
                            <button className="">
                                <Link to="https://www.instagram.com"> <img src={insta} alt="instagram" className='h-7 w-7' /></Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center -mt-3">
                        <h2 className="card-title">Ben Stock</h2>
                        <p>Design Expert</p>
                        <div className="card-actions">
                            <button className="">
                                <Link to="https://www.facebook.com"><img src={fb} alt="fb" className='h-7 w-7' /></Link>
                            </button>
                            <button className="">
                                <Link to="https://www.twitter.com"><img src={twit} alt="twitter" className='h-7 w-7' /></Link>
                            </button>
                            <button className="">
                                <Link to="https://www.linkedin.com"><img src={ln} alt="linkedin" className='h-7 w-7' /></Link>
                            </button>
                            <button className="">
                                <Link to="https://www.instagram.com"> <img src={insta} alt="instagram" className='h-7 w-7' /></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;