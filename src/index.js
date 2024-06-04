// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Publication from './Publication';
import NotFound from './NotFound';

const IndexApp = () => {
  return (
    <BrowserRouter basename="/Website">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/publication/:id" element={<Publication />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IndexApp />);
