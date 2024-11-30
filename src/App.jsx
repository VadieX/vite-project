import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import AppContext from './data/AppContext';
import AppReducer from './data/AppReducer';
import { data } from './data/module-data';
import Home from './pages/HomePage.jsx';
import Lab1 from './pages/Lab1Page.jsx';
import Lab2 from './pages/Lab2Page.jsx';
import Lab3 from './pages/Lab3Page.jsx';
import Lab4Add from './pages/Lab4AddPage.jsx';
import Lab4Edit from './pages/Lab4EditPage.jsx';
import NotFound from './pages/NotfoundPage.jsx';

function App() {
  const [state, appDispatch] = useReducer(AppReducer, data);
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2/:id" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab4/add" element={<Lab4Add />} />
          <Route path="/lab4/edit/:id" element={<Lab4Edit />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
}

export default App;