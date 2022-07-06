import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import TimeAttackPage from './components/TimeAttackPage';
import Menu from './components/Menu';

export default function App() {
  return (
      <div>
        <Menu />
        <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/drift" element={<DriftPage/>} />
          <Route path="/timeattack" element={<TimeAttackPage/>} />
          <Route path="/forza" element={<ForzaPage/>} />
        </Routes>
        </div>
      </div>
  );
}