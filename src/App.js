import PropTypes from 'prop-types'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Event from "./Component/Event";
import React from "react"
import Doctors from './Component/Doctors'
import Appointments from './Component/Appointments'
import Contact from './Component/Contact'
function App() {


  return (
  <BrowserRouter>
  {<Navbar title="iCare"/>}
  <Routes>
    
    <Route path='/home' element={<Home/>}/>
    <Route path="/doctor" element={<Doctors/>}/>
    <Route path="/appointment" element={<Appointments/>}/>
    <Route path="/event" element={<Event/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: "put your title "
}

export default App