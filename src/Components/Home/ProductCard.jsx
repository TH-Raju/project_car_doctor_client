import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, img, title, price } = product;
    return (
        <div className="card card-compact w-96 h-96 p-5  shadow-xl">
            <figure><img src={img} alt="product" className='h-40 w-40' /></figure>
            <div className="rating justify-center mt-5">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-5" />
            </div>

            <div className="card-body text-center">
                <h2 className="card-title items-center justify-center">{title}</h2>
                <p className='text-orange-600 text-lg font-semibold'>Price : ${price}</p>
            </div>
            <div className="card-actions justify-end">
                <Link to={`/productCheckout/${_id}`}>  {/* ${_id} */}
                    <button className='btn-sm btn-outline border border-orange-700 text-orange-600  hover:bg-orange-700 hover:border-none rounded-md'> Order Now </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;