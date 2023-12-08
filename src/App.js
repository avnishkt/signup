import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Home';
import Sign from './components/Sign up'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;