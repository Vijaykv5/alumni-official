import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('username') && localStorage.getItem('password');
 
  console.log(isAuthenticated);
  return (
   (isAuthenticated?children:<Navigate to='/login'/>)
  );
};

export default PrivateRoute;
