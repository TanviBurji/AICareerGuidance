import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProfessionExploration from './pages/ProfessionExploration';
import CareerPrediction from './pages/CareerPrediction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/explore" element={<ProfessionExploration />} />
        <Route path="/predict" element={<CareerPrediction />} />
      </Routes>
    </Router>
  );
}

export default App;