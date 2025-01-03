import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/navBar.jsx';
import Home from '../src/pages/Home.jsx';
import Profile from '../src/pages/Profile.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<div>Messages</div>} />
        <Route path="/notifications" element={<div>Notifications</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
      </Routes>
    </Router>
  );
};

export default App;
