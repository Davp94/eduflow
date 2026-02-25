import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
interface Student {
  nombre: string,
  email:string,
  id: string,
  grade: number;
}
function App() {
  //COMPONENT LOGIC
  const [count, setCount] = useState(0)
  let countTs: number = 1000;
  const valid = false;
  const student: Student = {nombre: 'dsadsad', email: 'dasdsa@dsadsa.com', id: 'EST-001', grade: 100};
  const sumCount = () => {
    console.log(countTs);
    countTs++
  }
  const header = <div>ENCABEZADO</div>
  //VISUAL COMPONENT
  return (
    <>
      <div className='main-content'>
        {valid && header}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => sumCount()}>
          sum count {countTs}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
