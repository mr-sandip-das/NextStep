import React from 'react';
import Home from './pages/Home.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import About from './pages/About.jsx';
import HelpSupport from './pages/HelpSupport.jsx';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<About /> } />
      <Route path="/help&support" element={<HelpSupport /> } />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
