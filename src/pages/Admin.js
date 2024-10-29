import React, { useState } from 'react';
import Newproduct from './Newproduct';
import Editproduct from './Editproduct';
import Dashboard from './Dashboard';

function Admin() {
    const [activeComponent, setActiveComponent] = useState('Dashboard');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Add Product':
                return <Newproduct />;
            case 'Modify/Delete Product':
                return <Editproduct />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex flex-col md:flex-row bg-white h-full">
            <aside className="bg-gray-300 text-white w-full md:w-1/4 p-4">
                <div className="mb-4 bg-yellow-300 p-4 text-center">Admin Panel</div>
                <nav>
                    <ul>
                        <li
                            className="p-2 hover:bg-yellow-300 cursor-pointer"
                            onClick={() => setActiveComponent('Dashboard')}
                        >
                            Dashboard
                        </li>
                        <li
                            className="p-2 hover:bg-yellow-300 cursor-pointer"
                            onClick={() => setActiveComponent('Add Product')}
                        >
                            Add Product
                        </li>
                        <li
                            className="p-2 hover:bg-yellow-300 cursor-pointer"
                            onClick={() => setActiveComponent('Modify/Delete Product')}
                        >
                            Modify/Delete Product
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-6 bg-gray-100">
                {renderComponent()}
            </main>
        </div>
    );
}

export default Admin;
