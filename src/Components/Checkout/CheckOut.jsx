import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const CheckOut = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.first.value} ${form.last.value}`;
        const email = user?.email || `unregisterd`;
        const message = form.message.value;
        const phone = form.phone.value;


        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if (phone.length < 9) {
        //     alert('Phone number should be 10 character or longer')
        // }

        fetch('http://localhost:5000/orders/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Palaced successfully')
                    form.reset();
                }
            })
            .catch(er => console.log(er));

    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder} className="my-10">
                <h2 className="text-4xl">You are about to order: <span className='font-bold'>{title}</span></h2>
                <h4 className="text-3xl mb-5">Price: <span className='font-bold'>{price}$</span></h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <input name="first" type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name="last" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" required className="input input-bordered w-full" />
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <textarea name="message" required className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Your Message"></textarea>
                <input type="submit" className='btn btn-outline border border-orange-700 text-orange-600  hover:bg-orange-700 hover:border-none my-8' value="Place Your Order" />
            </form>

        </div>
    );
};

export default CheckOut;