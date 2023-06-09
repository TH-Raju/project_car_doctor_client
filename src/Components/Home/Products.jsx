import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-eta.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <div className='text-center mb-8'>
                <p className="text-2xl font-bold text-orange-600">Popular Products</p>
                <h2 className='text-5xl font-semibold my-6'>Browse Our Product</h2>
                <p className='w-1/2 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex flex-wrap justify-around items-center gap-6'>

                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)

                }
            </div>
            <div className='text-center my-10'>
                <label htmlFor="my-modal-4" className='btn btn-outline border border-orange-700 text-orange-600  hover:bg-orange-700 hover:border-none'>More Products</label>

                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative" htmlFor="">
                        <h3 className="text-lg font-bold">We Don't have any Other product yet!</h3>
                        <h3 className="text-lg font-bold">Stock Out</h3>
                    </label>
                </label>
            </div>
        </div>
    );
};

export default Products;