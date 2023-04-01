import React, { useEffect, useState } from 'react';
import Bannaar from '../Shared/Bannaar';
import banner from '../../assets/images/checkout/checkout.png'
import banner1 from '../../assets/images/banner/3.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import useTitle from '../Shared/useTitle';

const ServiceRoute = () => {
    useTitle('Service')
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Bannaar img={banner} txt={'Service Detail'} btnTxt={'Home/Service Details'}></Bannaar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row justify-evenly">
                    <div>
                        <img src={banner1} className="min-w-xs md:max-w-2xl rounded-lg shadow-2xl" alt=' ' />
                    </div>
                    <div className='lg:ml-48 '>
                        <h2 className="font-bold text-orange-700 text-2xl lg:text-3xl">Services</h2>
                        <div className='flex flex-col '>
                            {
                                services.map(service => <Link to={`/checkout/${service._id}`}> <button className="btn  my-1 sm:btn-sm md:btn-md lg:btn-lg bg-white font-bold  text-black border-none hover:bg-orange-700 hover:text-white">{service.title} <span className='ml-7'>➡</span></button></Link>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-5/6 mx-auto'>
                <h2 className="text-4xl font-bold my-7">Unique Car Engine Service</h2>
                <p className='font-semibold leading-relaxed'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
                <div className='flex flex-col lg:flex-row'>
                    <div className='my-16 grid grid-cols-1 md:grid-cols-2  gap-10'>
                        <div className="card  border border-t-orange-700">
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">Instant Car Services</h2>
                                <p className='font-semibold leading-relaxed'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

                            </div>
                        </div>
                        <div className="card  border border-t-orange-700">
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">24/7 Quality Service</h2>
                                <p className='font-semibold leading-relaxed'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

                            </div>
                        </div>
                        <div className="card  border border-t-orange-700">
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">Easy Customer Service</h2>
                                <p className='font-semibold leading-relaxed'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

                            </div>
                        </div>
                        <div className="card  border border-t-orange-700">
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">Quality Cost Service</h2>
                                <p className='font-semibold leading-relaxed'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>

                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <div className="card  bg-black md:w-64 md:ml-10 mt-24 h-80 text-white shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={logo} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p>Need Help? We Are Here <br /> To Help You</p>
                                <div className="card-actions">
                                    <Link to="/"><button className="btn btn-primary bg-orange-700 hover:bg-orange-700 border-none">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='font-semibold leading-relaxed'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
            </div>
            <div className='w-5/6 mx-auto my-20'>
                <h2 className="text-4xl font-bold my-7">3 Simple Steps to Process</h2>
                <p className='font-semibold leading-relaxed'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-3  gap-10 my-20'>
                    <div className='text-center'>
                        <h2 className='bg-orange-700 inline-block p-3 rounded-full text-white font-bold'>01</h2>
                        <h1 className='font-bold text-2xl my-2'>STEP ONE</h1>
                        <p className='font-semibold'>It uses a dictionary of over 200 .</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='bg-orange-700 inline-block p-3 rounded-full text-white font-bold'>02</h2>
                        <h1 className='font-bold text-2xl my-2'>STEP TWO</h1>
                        <p className='font-semibold'>It uses a dictionary of over 200 .</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='bg-orange-700 inline-block p-3 rounded-full text-white font-bold'>03</h2>
                        <h1 className='font-bold text-2xl my-2'>STEP THREE</h1>
                        <p className='font-semibold'>It uses a dictionary of over 200 .</p>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl mb-10">
                <figure><img src={banner2} alt="Shoes" className='max-w-2xl rounded-lg' /></figure>
            </div>
        </div>
    );
};

export default ServiceRoute;