import React from 'react';
import SideBar from './SideBar';
import userphoto from "./user.png"; 
import { FaPlus } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";



const Mespatients = () => {
  return (
    <div className="flex h-full">
      <div className="w-2/6">
        <SideBar />
      </div>
      <div className="flex-1 p-8 ">
        <div className="flex items-center justify-end mb-8 mr-32">
          <img src={userphoto} alt="Profile" className="w-12 h-12 rounded-full border-2 border-white" />
        </div>
        
        <div className="p-8 flex items-center justify-between">
      <h1 className="text-3xl font-bold mb-4">Mes Patients</h1>
      <div className='flex items-center'>
      <Link to="/" className=" text-blue-500">
        <FaPlus className="mr-2" />
      </Link>
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <FaUserCircle className="text-4xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text">Moustapha</h3>
            <div className="flex space-x-4">
            <button class="font-bold rounded-lg text-base  w-24 h-8 bg-green-600 text-[#ffffff] justify-center">VOIR</button>
            </div>
          </div>
      </div>
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <FaRegUserCircle className="text-4xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text">Alimatou</h3>
            <div className="flex space-x-4">
            <button class="font-bold rounded-lg text-base  w-24 h-8 bg-green-600 text-[#ffffff] justify-center">VOIR</button>
            </div>
          </div>
      </div>
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <FaRegUserCircle className="text-4xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text">Pathé</h3>
            <div className="flex space-x-4">
            <button class="font-bold rounded-lg text-base  w-24 h-8 bg-green-800 text-[#ffffff] justify-center">
            <Link to="/Pinfos" >VOIR</Link>
                
                </button>
            </div>
          </div>
      </div>
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <FaUserCircle className="text-4xl" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text">Cheick Bara</h3>
            <div className="flex space-x-4">
            <button class="font-bold rounded-lg text-base  w-24 h-8 bg-green-600 text-[#ffffff] justify-center">VOIR</button>
            </div>
          </div>
      </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Mespatients;
