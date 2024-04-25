import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Todos } from './components/Todos/Todos';
import { Trash } from './components/Trash/Trash';
import { EViewMode } from './types/EViewMode';

export const App: React.FC = () => {
  return (
  <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${EViewMode.All}`} element={<Todos />} />
        <Route path={`/${EViewMode.Deleted}`} element={<Trash />} />
      </Routes>
    </Router>
  )
}
