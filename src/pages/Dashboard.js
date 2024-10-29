import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5050/api/orders'); // Remplacez par votre endpoint
                setOrders(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-xl">Loading...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="text-red-600">Error: {error}</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6 text-yellow-600">Orders Dashboard</h1>
            <ul className="space-y-4">
                {orders.map((order) => (
                    <li key={order._id} className="border rounded-lg p-4 shadow-md bg-white">
                        <h2 className="text-xl font-semibold text-gray-800">Order ID:</h2>
                        <input
                            type="text"
                            value={order._id}
                            readOnly
                            className="border rounded-lg p-2 bg-gray-50 text-gray-800 w-full mb-2"
                        />
                        <p className="text-gray-700">Total Price:</p>
                        <input
                            type="text"
                            value={`${order.totalPrice}€`}
                            readOnly
                            className="border rounded-lg p-2 bg-gray-50 text-gray-800 w-full mb-2"
                        />
                        <p className="text-gray-700">Total Quantity:</p>
                        <input
                            type="text"
                            value={order.totalQty}
                            readOnly
                            className="border rounded-lg p-2 bg-gray-50 text-gray-800 w-full mb-4"
                        />
                        <h3 className="text-lg font-medium mt-4 text-gray-800">Items:</h3>
                        <ul className="list-disc list-inside space-y-1">
                            {order.items.map(item => (
                                <li key={item._id} className="flex gap-8">
                                    <span className="font-semibold bg-yellow-200">{item.name} : </span>
                                    <span className='bg-yellow-200'>{item.price}€ (Quantity: {item.quantity})</span>
                                </li>
                            ))}
                        </ul>
                        <h3 className="text-lg font-medium mt-4 text-gray-800">User Details:</h3>
                        <p>Email:</p>
                        <input
                            type="text"
                            value={order.user.email}
                            readOnly
                            className="border rounded-lg p-2 bg-gray-50 text-gray-800 w-full mb-2"
                        />
                        <p>Address:</p>
                        <input
                            type="text"
                            value={order.user.address}
                            readOnly
                            className="border rounded-lg p-2 bg-gray-50 text-gray-800 w-full mb-2"
                        />
                        <p>Phone:</p>
                        <input
                            type="text"
                            value={order.user.tel}
                            readOnly
                            className="border rounded-lg p-2 bg-gray-50 text-gray-800 w-full mb-4"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
