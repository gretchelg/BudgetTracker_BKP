import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landingpage from './components/Landingpage';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transaction';
import Report from './components/Report';
import Menu from './components/Menu';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <Landingpage />
      <Menu />

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/transactions' element={<Transaction />} />
        <Route path='/reports' element={<Report />} />
      </Routes>
    </div>
  )
}

export default App
