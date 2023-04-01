import React from 'react';

const Bannaar = ({ img, txt, btnTxt }) => {
    return (
        <div className="carousel-item border border-spacing-2.5 rounded-xl relative w-full bg-gradient-to-r from-black to-gray-500">
            <img src={img} className="w-full mix-blend-overlay object-cover" alt='img' />
            <div className="absolute flex justify-start items-center transform top-1/3 left-8 ">
                <h1 className='text-2xl md:text-4xl font-bold text-white '>{txt}</h1>
            </div>
            <div className='absolute md:ml-80 lg:ml-96 lg:pl-40 ml-28 bottom-0 '>
                <button className='btn btn-xs md:btn-md btn-primary bg-orange-700'>{btnTxt}</button>
            </div>

        </div>
    );
};

export default Bannaar;