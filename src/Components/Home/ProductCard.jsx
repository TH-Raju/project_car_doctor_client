import React from 'react';

const ProductCard = ({ product }) => {
    const { img, title, price } = product;
    return (
        <div className="card card-compact w-96 h-96 p-5  shadow-xl">
            <figure><img src={img} alt="product" className='h-40 w-40' /></figure>
            <div className="rating justify-center mt-5">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
            </div>

            <div className="card-body text-center">
                <h2 className="card-title items-center justify-center">{title}</h2>
                <p className='text-orange-600 text-lg font-semibold'>Price : ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;