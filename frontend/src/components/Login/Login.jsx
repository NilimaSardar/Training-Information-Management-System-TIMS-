import React from 'react';
import { FaUser, FaLock, FaChevronLeft } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <img src="HimalayaLOGO.png" alt="Himalaya College Logo" className="w-80" />
      <div className="bg-white p-8 pb-15 rounded-2xl shadow-lg w-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl tracking-wide font-medium text-blue-500 ">Welcome!</h2>
          <p className="text-gray-600">Sign in to continue</p>
        </div>
        <form className="space-y-4">
          <div className="flex items-center border-2 border-gray-300 hover:border-blue-500 hover:border-2 rounded-lg p-3 bg-gray-50">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent focus:outline-none cursor-pointer"
            />
          </div>
          <div className="flex items-center border-2 hover:border-blue-500 hover:border-2 border-gray-300 rounded-lg p-3 bg-gray-50">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span className="flex items-center cursor-pointer">
            <FaChevronLeft className="mr-0.5" />Student
            </span>
            <span className="cursor-pointer text-blue-500 hover:underline">Forget Password?</span>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white tracking-wider p-2 rounded-4xl hover:bg-blue-600 transition font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
