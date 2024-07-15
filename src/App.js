import './App.css';
import Acceuil from './components/Acceuil';
import Mesrendezvous from './components/Mesrendezvous';
import Moncompte from './components/Moncompte';
import Inscription from './components/Inscription';   
import Connexion from './components/Connexion';   
import Dashboard from './components/Dashboard';
import Infos from './components/Infos.js';
import Mespatients from './components/Mespatients.js';
import Pinfos from './components/Pinfos.js';
import { Routes, Route } from 'react-router-dom';                                

function App() {
  return (
    <Routes>
      <Route path='/' element={<Acceuil/>}/>
      <Route path='/mesrendezvous' element={<Mesrendezvous/>}/>
      <Route path='/moncompte' element={<Moncompte/>}/>
      <Route path='/inscription' element={<Inscription/>}/>
      <Route path='/connexion' element={<Connexion/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/infos' element={<Infos/>}/>
      <Route path='/mespatients' element={<Mespatients/>}/>
      <Route path='/pinfos' element={<Pinfos/>}/>
    </Routes>
  );
}

export default App;
