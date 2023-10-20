import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Container } from '@mui/material'
import {Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage'
import Technology from './pages/Technology';
import Company from './pages/Company';
import HelpingHands from './pages/HelpingHands';
import InternShip from './pages/InternShip';
import Partners from './pages/Partners';
import Customers from './pages/Customers';
import NewsLetters from './pages/NewsLetters';
function App() {

  return (
<div>
<Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/technology' element={<Technology />} />
    <Route path='/company' element={<Company />} />
    <Route path='/helping_hands' element={<HelpingHands />} />
    <Route path='/internship' element={<InternShip />} />
    <Route path='/partners' element={<Partners />} />
    <Route path='/customers' element={<Customers />} />
    <Route path='/newsletters' element={<NewsLetters />} />
</Routes>
</div>

  )
}

export default App
