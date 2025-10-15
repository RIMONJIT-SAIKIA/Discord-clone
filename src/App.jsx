import { useState } from 'react'
import './App.css'
import Header from './components/Mains/Header'
import Footer from './components/Mains/Footer'
import Home from './components/Pages/Home'
import { Outlet } from 'react-router-dom'
function App() {

  return (
  
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default App;
