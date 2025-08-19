import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const isLoggedIn = !!localStorage.getItem('user'); // Basit mock login kontrolü

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
