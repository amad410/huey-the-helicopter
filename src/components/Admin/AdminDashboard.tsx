import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-display font-bold text-gray-900">
            Huey The Helicopter Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
              <h2 className="text-xl font-semibold mb-4">Welcome to the Admin Dashboard</h2>
              <p>This is where you would manage your Huey The Helicopter content and products.</p>
              
              {/* Add your admin functionality here */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-medium">Products</h3>
                  <p className="text-gray-500 text-sm">Manage your product inventory</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-medium">Orders</h3>
                  <p className="text-gray-500 text-sm">View and process customer orders</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-medium">Content</h3>
                  <p className="text-gray-500 text-sm">Update website content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
