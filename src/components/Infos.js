import React from 'react';
import { Link } from 'react-router-dom';


const infos = () => {
    return (
        <deccx>
           <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl ">
    <div className="flex flex-row gap-3 pb-16">
    </div>
    <form className="flex flex-col">
        <div className="pb-2">
            <div className="relative text-gray-400">
                <input type="text" name="prenom" id="prenom" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="Prénom" autocomplete="off"/>
        </div>
        </div>
        <div className="pb-2">
            <div className="relative text-gray-400">
                <input type="text" name="nom" id="nom" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="Nom" autocomplete="off"/>
        </div>
        </div>
        <div className="pb-2">
            <div className="relative text-gray-400">
                <input type="tel" name="tel" id="tel" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="Age" autocomplete="off"/>
        </div>
        </div>
        <div className="pb-2">
            <div className="relative text-gray-400">
                <input type="text" name="adresse" id="adresse" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="Adresse" autocomplete="off"/>
        </div>
        </div>
        <div className="pb-2">
            <div className="relative text-gray-400">
                <input type="tel" name="telephone" id="telephone" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" placeholder="Téléphone" autocomplete="off"/>
        </div>
        </div>
        <button type="button" className="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
        <Link to="/Mespatients" >Valider</Link>
            
            </button>
    </form>
</div>
        </deccx>
    );
};

export default infos;