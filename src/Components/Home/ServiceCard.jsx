import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card card-compact w-96 h-96 p-5 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-600 text-2xl font-semibold'>Price : ${price}</p>
                <div className="card-actions justify-end">
                    <button className='text-orange-700 text-3xl font-bold'> → </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;