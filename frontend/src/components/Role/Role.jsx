import React from 'react'
import { FaUserTie } from 'react-icons/fa';
import { RiUserStarFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";

const Role = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <img src="HimalayaLOGO.png" alt="Himalaya College Logo" className="w-80" />
      <div className="bg-white p-8 pb-15 rounded-2xl shadow-lg w-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl tracking-wide font-medium text-blue-500 ">Welcome!</h2>
          <p className="text-gray-600">Select your Role to continue</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center border-2  border-gray-300 hover:border-blue-500 hover:border-2 rounded-lg p-3 bg-gray-50 cursor-pointer">
          <FaUserTie className="text-gray-500 mr-3" />
            Student
          </div>
          <div className="flex items-center border-2 border-gray-300 hover:border-blue-500 hover:border-2 rounded-lg p-3 bg-gray-50 cursor-pointer">
          <RiUserStarFill className="text-gray-500 mr-3" />
            Class Representative
          </div>
          <div className="flex items-center border-2  border-gray-300 hover:border-blue-500 hover:border-2  rounded-lg p-3 bg-gray-50 cursor-pointer">
            <GiTeacher className="text-gray-500 mr-3" />
            Trainer
          </div>
          <div className="flex items-center border-2  border-gray-300 hover:border-blue-500 hover:border-2  rounded-lg p-3 bg-gray-50 cursor-pointer">
            <RiAdminFill className="text-gray-500 mr-3" />
            Admin
          </div>
        </div>
      </div>
    </div>
  );
}

export default Role