import React, { useContext } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import AuthContext from "./Auth/auth-context";

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Header from "./component/Header";

import './App.css';

function App() {

  const authCtx = useContext(AuthContext);
  
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        {authCtx.isLoggedIn && <Route path="/" element={<Home />} />}
        <Route path="signup" element={<SignUp />} />
        
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="login" />} /> 
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
