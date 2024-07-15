import React from 'react';
import SideBar from './SideBar';
import userphoto from "./user.png"; 

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <div className="w-2/6">
        <SideBar />
      </div>

      <div className="flex-1 p-8 ">
        <div className="flex items-center justify-end mb-8 mr-32">
          <img src={userphoto} alt="Profile" className="w-12 h-12 rounded-full border-2 border-white" />
        </div>
        <h4 className="text-blue-500 text-2xl mb-4" >Bienvenue Docteur</h4>
        <p className="text-gray-600 mb-8 mr-32" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien vitae nisl tincidunt consectetur. Nulla facilisi. Sed id mauris id turpis accumsan fringilla.
        </p>
        <h2 className="text-3xl mb-4" >Rendez-Vous</h2>
    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 mr-32 ">
    <div class="bg-blue-600 rounded-lg h-32 p-4 flex flex-col items-center justify-center">
    <h3 className="text-white text-lg mb-2" >Titre 1</h3>
    <p className="text-gray-700" >Contenu de la case 1</p>
    </div>
    <div class="bg-green-600 rounded-lg h-32 p-4 flex flex-col items-center justify-center">
    <h3 className="text-white text-lg mb-2" >Titre 1</h3>
    <p className="text-gray-700" >Contenu de la case 1</p>
    </div>
    <div class="bg-black rounded-lg h-32 p-4 flex flex-col items-center justify-center">
    <h3 className="text-white text-lg mb-2" >Titre 1</h3>
    <p className="text-gray-700" >Contenu de la case 1</p>
    </div>
    <div class="bg-blue-300 rounded-lg h-32 p-4 flex flex-col items-center justify-center">
    <h3 className="text-white text-lg mb-2" >Titre 1</h3>
    <p className="text-gray-700" >Contenu de la case 1</p>
    </div>
    </div>
      </div>
    </div>
  );
};

export default Dashboard;
