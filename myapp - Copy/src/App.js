import React, { createContext, useEffect, useState ,useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

import Login from './components/Login';



const MyContext=createContext();
const App = () => {
  
  const[isToggleSidebar,setIsToggleSidebar]=useState(false);
  
  const values={
    isToggleSidebar,
    setIsToggleSidebar
  }
  useEffect(()=>{
    alert(isToggleSidebar)
  },[ isToggleSidebar])
  return (
    
    <div>
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
    <div className='main d-flex'>
      <div className='sidebarWrapper' >
        <Sidebar/>
      </div>
    </div>
    <Routes>
      <Route path="/"exact ={true} element={<Home/>}/> 
      <Route path="/login" exact ={true} element={<Login/>}/> 
      </Routes>
      </MyContext.Provider>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
export {MyContext};