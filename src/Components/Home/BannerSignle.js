import React from 'react';

const BannerSignle = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item border border-spacing-2.5 rounded-xl relative w-full bg-gradient-to-r from-black via-gray-700 to-transparent">
            <img src={image} className="w-full mix-blend-overlay object-cover" alt='img' />
            <div className="absolute flex justify-start transform -translate-y-1/2 md:left-24 left-11 right-10 top-1/4 ">
                <h1 className='md:text-7xl text-3xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex md:w-2/5 w-2/4 justify-start transform -translate-y-1/2 md:left-24 left-11 right-10 top-1/2">
                <p className='text-white md:text-xl text-md mt-5'>There are Many Variant of Passage of consectetur adipisicing elit. Fugit, accusamus.</p>
            </div>
            <div className="absolute flex w-2/5 justify-start transform -translate-y-1/2 md:left-24 left-11 right-10 top-3/4">
                <button className='btn btn-warning mr-8 md:btn-md btn-sm bg-orange-700 text-white border-none hover:bg-orange-700'>Discover More</button>
                <button className='btn btn-outline border border-white text-white hover:bg-orange-700 '>Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-5">
                <a href={`#slide${prev}`} className="btn btn-circle md:btn-md btn-sm mr-7 hover:bg-orange-700">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle md:btn-md btn-sm hover:bg-orange-700">❯</a>
            </div>
        </div>

    );
};

export default BannerSignle;