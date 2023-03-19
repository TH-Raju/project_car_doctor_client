import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import check from '../../assets/icons/check.svg'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-8'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-semibold my-6'>Our Service Area</h2>
                <p className='w-1/2 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex flex-wrap justify-around items-center gap-6'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-10'>
                <button className='btn btn-outline border border-orange-700 text-orange-600  hover:bg-orange-700 hover:border-none'>More Services</button>
            </div>

            <div className='bg-black text-white p-16 my-32 rounded-md'>
                <div className='flex flex-wrap gap-8 md:justify-evenly justify-center items-center'>
                    <div className='flex gap-3 items-center'>
                        <img src={check} alt="" className='h-7 w-7' />
                        <div>
                            <h1 className='text-xs'>We are open monday-friday</h1>
                            <h1 className='text-xl font-bold'>7:00 am - 9:00 pm</h1>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src={check} alt="" className='h-7 w-7' />
                        <div>
                            <h1 className='text-xs'>Have a question? </h1>
                            <h1 className='text-xl font-bold'>+880 1859 0535 43</h1>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src={check} alt="" className='h-7 w-7' />
                        <div>
                            <h1 className='text-xs'>Need a repair? our address </h1>
                            <h1 className='text-xl font-bold'>Mohipal Feni, Bangladesh</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;