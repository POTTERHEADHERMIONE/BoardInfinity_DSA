import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ReturnProcess from './pages/ReturnProcess'
import RewardsDashboard from './pages/RewardsDashboard'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/return" element={<ReturnProcess />} />
          <Route path="/rewards" element={<RewardsDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App