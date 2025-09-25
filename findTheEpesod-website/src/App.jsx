import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import React from 'react';
import Series from './pages/Series.jsx';
import HomePage from './pages/HomePage.jsx';
import Layout from './Layout.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/series" element={<Series/>} />
          <Route path="/movies" element={<div>Movies Page - Coming Soon!</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
