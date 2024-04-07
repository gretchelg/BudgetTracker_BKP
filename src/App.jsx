import { useContext } from 'react';
import './App.css'
import { AuthContext } from './context/AuthContext';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import Menu from './components/Menu';
import Landingpage from './components/Landingpage';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Transaction from './components/Transaction';
import AddIncome from './components/AddIncome';
import AddExpense from './components/AddExpense';
import Report from './components/Report';


function App() {
  const { token } = useContext(AuthContext);
  console.log("token:", token)

  return (
    <div className="App">
        {token ? (
        <div>
          <Navbar />

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reports" element={<Report />} />
                <Route path="/transactions" element={<Transaction />} />
                <Route path="/addexpense" element={<AddExpense />} />
                <Route path="/addincome" element={<AddIncome />} />
                {/* <Route path="/budget" element={<Budget />} />
                <Route path="/addbudget" element={<Addbudget />} />
                <Route path="/link" element={<Client />} />
                <Route path="/scan" element={<Scan />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/camera" element={<CaptureImage />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>

            <Menu />
        </div>
        ) : (
          <Routes>
            <Route path="/" element={<Landingpage />} />
            {/* <Route path="/entrypage" element={<LandingPage2 />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      )}
    
    </div>
  )
}

export default App
