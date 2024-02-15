import PropTypes from 'prop-types'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'

import React from "react"
function App() {


  return (
  <BrowserRouter>
  {<Navbar title="iCare"/>}
  <Routes>
    
    <Route path='/home' element={<Home/>}/>
      
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