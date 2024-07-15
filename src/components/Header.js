import React from 'react';
import logo from './RVS1.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="bg-stone-200 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
        <img className='float-right w-1/5 h-' src={logo} alt="logo"/>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:flex-grow">
          <ul className="flex space-x-4">
            <li><Link to="/" className="font-semibold text-300">ACCEUIL</Link></li>
            <li><Link to="/Mesrendezvous" className="font-semibold text-300">MES RENDEZ-VOUS</Link></li>
            <li><Link to="/Moncompte" className="font-semibold text-300">MON COMPTE</Link></li>
          </ul>
        </div>
        <div className="mr-12">
          <button className="font-semibold bg-blue-600 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-4"><Link to='/Connexion'>Se Connecter</Link></button>
          <button className="font-semibold bg-gray-600 hover:bg-gray-600 text-white px-4 py-2 rounded-md"><Link to='/'>Deconnexion</Link></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


 
