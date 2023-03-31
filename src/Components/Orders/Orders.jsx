import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrder] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email])
    console.log(user.email);
    // console.log(user.email);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [user?.email])

    return (
        <div>
            <h2 className="text-4xl"> {orders.length}</h2>
        </div>
    );
};

export default Orders;