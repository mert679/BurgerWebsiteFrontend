import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import FooterBar from './components/FooterBar'
import Menu from "./components/Menu"
import { Route,Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import ContactPage from './components/ContactPage'
function App() {
  

  return (
    <>
     <Navbar /> 
     <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/Hakkimizda" element={<AboutUs/>}></Route>
      <Route path="/iletisim" element={<ContactPage/>}></Route>
     </Routes>
      <FooterBar />     
    </>
  )
}

export default App
