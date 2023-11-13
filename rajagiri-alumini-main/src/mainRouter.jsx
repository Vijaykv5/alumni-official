import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import PrivateRoute from './PrivateRoute';

const MainRouter = () => {
  return (


    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><App /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/chat" element={<Chat />} />
        
      </Routes>
    </Router>
    )
  


};


export default MainRouter;