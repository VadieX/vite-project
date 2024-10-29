import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
import {data} from './data/module-data.js';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx';
import Lab1Page from './pages/Lab1Page.jsx';
import PeoplePage from './pages/PeoplePage.jsx';
import NotfoundPage from './pages/NotfoundPage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <RootLayout>
      <Routes>
        <Route path="/lab1" element={<Lab1Page></Lab1Page>} />
        <Route path="/lab2" element={<h1>Labolatorium 2</h1>} />
        <Route path="/people/:id" element={<PeoplePage/>} />
        <Route path="*" element={<NotfoundPage></NotfoundPage>} />
      </Routes>
    </RootLayout>
  )
}

export default App