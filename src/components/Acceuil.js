import React from 'react';
import med from './med.png';
import Header from './Header'



const Home = () => {
    return (
        <acceuil>
        <Header/>
        <div className='flex items-center justify-center overflow-hidden mt-20'>
           <div className='p-10 mb-12'> 
           <h1 className="text-6xl mb-6">Rendez-vous</h1>
           <p className ="w-80 mb-6 mx-auto" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien vitae nisl tincidunt consectetur. Nulla facilisi. 
                        Sed id mauris id turpis accumsan fringilla.
                        Sed id mauris 
                        id turpis accumsan fringilla. 
                        </p>
    <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Button</button>
    </div>
                    <div> 
                        <img className="w-400 h-96 ml-56" src={med} alt="logo"/>
                       
                    </div>

        </div>
        </acceuil>

    );
};

export default Home;