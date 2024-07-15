import React from 'react';
import SideBar from './SideBar';
import userphoto from "./user.png"; 
import { FaPlus } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";



const Mesrendezvous = () => {
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
      <h1 className="text-3xl font-bold mb-4">Rendez-vous</h1>
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
            <h3 className="text">Aujourd'hui</h3>
            <div className="flex space-x-4">
               09H:00
            </div>
          </div>
          <div className="flex items-center justify-between mb-2  ">
            <h3 className=" text-blue-500">Moussa BA</h3>
            <div className="flex space-x-4">
              <IoIosArrowForward />
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
            <h3 className="text">28 / 06 /2024</h3>
            <div className="flex space-x-4">
            19H:00
            </div>
          </div>
          <div className="flex items-center justify-between mb-2  ">
            <h3 className=" text-blue-500">Equipe Xarala</h3>
            <div className="flex space-x-4">
              <Link to="/infos" className="ml-auto">
              <IoIosArrowForward className='text-blue-600'/>
              </Link>
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
            <h3 className="text">21 / 06 /2024</h3>
            <div className="flex space-x-4">
               11H:00
            </div>
          </div>
          <div className="flex items-center justify-between mb-2  ">
            <h3 className=" text-blue-500">Réunion d'affaire</h3>
            <div className="flex space-x-4">
              <IoIosArrowForward />
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
            <h3 className="text">8 / 06 /2024</h3>
            <div className="flex space-x-4">
               17H:00
            </div>
          </div>
          <div className="flex items-center justify-between mb-2  ">
            <h3 className=" text-blue-500">Pathé Ba</h3>
            <div className="flex space-x-4">
              <IoIosArrowForward />
            </div>
          </div>
      </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Mesrendezvous;
