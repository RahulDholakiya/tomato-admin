import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar"
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add/Add';
import Orders from './Pages/Orders/Orders';
import List from './Pages/List/List';

function App() {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='app-content'>
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
