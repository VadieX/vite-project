import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {data} from '../module-data.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://vitejs.dev/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React  Simple React project</h1>
      <div className="card">
        <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="read-the-docs">
        {data.map((element, index) => (
          <p key={index}>
            <strong>Name:</strong> {element.name} <strong>Birthdate:</strong> {element.birth} <strong>Eyes:</strong> {element.eyes}
          </p>
        ))}
      </div>
    </div>
  )
}

export default App