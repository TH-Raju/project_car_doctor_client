import React from 'react';
import quort from '../../assets/icons/quote.svg'

const ReviewCard = ({ img, name, title, text }) => {
    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md  ">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={img} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>
                        <span className="text-xs ">{title}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <img src={quort} alt="quote" className='w-10 h-10 opacity-25' />
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm ">
                <p>{text}</p>
            </div>
            <div className="rating ml-4">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
            </div>
        </div>
    );
};

export default ReviewCard;