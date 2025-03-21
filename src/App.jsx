import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Griglia from "./progetto_memory";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Griglia />
      </div>
      <h1>Drunk Simpsons Game</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          shot fatti {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
