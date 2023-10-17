import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Container } from '@mui/material'
import {Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage'
import Technology from './pages/Technology';
import Company from './pages/Company';
function App() {

  return (
<div>
<Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/technology' element={<Technology />} />
    <Route path='/company' element={<Company />} />
</Routes>
</div>

  )
}

export default App
