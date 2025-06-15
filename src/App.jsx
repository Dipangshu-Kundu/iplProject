import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import MatchDetail from './components/MatchDetail'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import PointsTable from './components/PointsTable'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to "/" on refresh
    if (location.pathname !== '/') {
      navigate('/')
    }
  }, [])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Home />} />
          <Route path='/pointsTable' element={<PointsTable />}></Route>
          <Route path='/news' element={<h1>Coming soon</h1>} />
        </Route>
        <Route path='/matchDetail/:id' element={<MatchDetail />} />
      </Routes>
    </div>

  )
}

export default App
