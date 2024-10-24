
import React, { useState } from 'react';
import Newproduct from './Newproduct';
import Editproduct from './Editproduct';
function Admin() {
    const [activeComponent, setActiveComponent] = useState('Dashboard');

    const renderComponent = () => {
      switch (activeComponent) {
        case 'Add Product':
          return <Newproduct/>;
        case 'Modify/Delet Product':
          return <Editproduct/>;
        
        default:
          return <Dashboard />;
      }
    };
  
    return (
      <div className="flex bg-white ">
        <aside className="w-64 bg-gray-300 text-white relative">
          <div className="p-4 mt-3 bg-yellow-300">Admin Panel</div>
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
                onClick={() => setActiveComponent('Modify/Delet Product')}
              >
                Modify/Delet Product
              </li>
             
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
          {renderComponent()}
        </main>
      </div>
    );
  };
  
  // Sample components for each section
  const Dashboard = () => <h2 className="text-xl">Welcome to the Dashboard</h2>;
  const AddProduct = () => <h2 className="text-xl">Add Product Form</h2>;
  const ModifyProduct = () => <h2 className="text-xl">Modify Product Form</h2>;
 
export default Admin