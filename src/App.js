import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes

import Login from './pages/login';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Sử dụng Routes thay vì Route */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
