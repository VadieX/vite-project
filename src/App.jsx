import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/HomePage.jsx';
import Lab1 from './pages/Lab1Page.jsx';
import Lab2 from './pages/Lab2Page.jsx';
import NotFound from './pages/NotfoundPage.jsx';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab1" element={<Lab1 />} />
        <Route path="/lab2/:id" element={<Lab2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  );
}

export default App;