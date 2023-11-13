import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRouter from './mainRouter';  // Change the import statement
import Login from './components/Login/Login';

const Main= () => {
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(

      <MainRouter/>
    )
  );
};


Main();