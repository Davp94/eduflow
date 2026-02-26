//external libraries
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//assets styles images
import './App.css'
//components
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
//functions, types, utils, ...

function App() {
  //COMPONENT LOGIC
  
  //VISUAL COMPONENT
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<LandingPage/>}></Route>
          <Route path='dashboard' element={<DashboardPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
