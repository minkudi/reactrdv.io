import React from 'react';
import Header from './Header'


const inscription = () => {
    return (
<div> 
    <Header/>
<div className="min-h-screen text-gray-900 flex justify-center">
  <div className='w-full flex-1 '> 
  <form className="w-1/2 p-4 mx-auto text-center py-14 ">
  <div className='my-3 text-center font-bold text-2xl'> 
       <div className='px-2 inline-block text-800' >
             S'inscrire
        </div>
  </div>
    <div className="flex flex-col gap-6 mb-1">
      <div>
        <input placeholder="Entrer votre nom"
          className="peer h-full w-full rounded border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>
      <div>
        <input placeholder="Entrer votre prénom"
          className="peer h-full w-full rounded border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>
      <div >
        <input placeholder="Entrer votre email"
          className="peer h-full w-full rounded border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>
      <div>
        <input placeholder="Entrer votre mot de passe"
          className="peer h-full w-full rounded border border-blue-gray-200  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>
    </div>
    <button
      className="mt-6 block w-full select-none rounded-lg bg-blue-400 py-3 px-6 text-center align-middle font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      S'inscrire
    </button>
    <button 
      className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-4 text-center align-middle font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      Continuer avec Google
</button>
  </form>
  </div>
</div> 
</div>
    );
};

export default inscription;