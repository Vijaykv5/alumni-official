import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import App from './App';
import './index.css';
import Profile from './components/Profile';
import Chat from './components/Chat';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
