import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './index.css';
import "./styles/bootstrap.min.css";
import  App from './App';
import ProfInfo from './components/ProfInfo';
import Profiles from './components/Profiles';
import Navbar from './components/Navbar';
import Create from './components/Create';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nav" element={<Navbar />}/>
        <Route path="/profiles" element={<Profiles/>}/>
        <Route path="/p_info" element={<ProfInfo/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit-user/:id" element={<Create/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);