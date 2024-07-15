import React from "react";
import { Link } from "react-router-dom";

import logo from "./RVS1.png"; 
import userphoto from "./user.png"; 

function SideBar() {
  return (
    <div className="bg-sky-500 fixed left-0 top-0 h-screen w-64  flex flex-col overflow-hidden">
      <div className=" flex items-center justify-center p-4" style={{ height: '25%' }}>
        <div className="bg-white p-2 ">
          <img className="w-20 h-20" src={logo} alt="Logo" />
        </div>
      </div>
      <div className="bg-white p-4 text-center text-gray-900">
        Tableau de bord
      </div>
      <div className="p-4 flex flex-col items-center">
        <img src={userphoto} className="w-28 h-28 rounded-full my-4" alt="User" />
      </div>
      <ul className="flex-1 p-4 space-y-4">
        <li className="ml-8">
          <Link className="flex items-center gap-3 text-white  px-5 " to="/">
            Accueil
          </Link>
        </li>
        <li className="ml-8">
          <Link className="flex items-center gap-3 text-white  px-5 " to="/Mesrendezvous">
            Mon rendez-vous
          </Link>
        </li>
        <li className="ml-8">
          <Link className="flex items-center gap-3 text-white  px-5 " to="/patient">
            Mes patients
          </Link>
        </li>
        <li className="ml-8">
          <Link className="flex items-center gap-3 text-white  px-5 " to="/Moncompte">
            Mon compte
          </Link>
        </li>
        <li className="ml-8">
          <Link className="flex items-center gap-3 text-white py-16 px-5" to="/">
            Deconnexion
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
