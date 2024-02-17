import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


function Navbar(props) {
 
    const[currentState,nextState]=useState({
        color:'white',
        backgroundColor:'black'
    })
    const toggleStyle=()=>{
console.log("Faisal");
if(currentState==='white'){
    nextState({
        color:'black',
        backgroundColor:'white'
    })
   
    }
    else{
        nextState({
            color:'white',
            backgroundColor:'black'
        }) 
}

    }
  return (
    <>
    
    <div style={currentState}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid mx-0">
    {/* <NavLink className="navbar-brand" to="/">{props.title}</NavLink> */}
    <div className="logo-wrapper">
    <div className="logo-holder logo-3">
        <a href="">
          <h3>ICare</h3>
          <p>near your care</p>
        </a>
      </div>
      </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/doctor">Doctors</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/appointment">Appointments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/event">Event</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="/">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="/">Pathology</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="dropdown-menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Facility
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="False">Disabled</a>
        </li> */}
      </ul>
      {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={toggleStyle} role="switch" id="flexSwitchCheckChecked" checked/>
 
</div> */}
      <form className="d-flex" role="search">
    

        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
  
</div>

</nav>
    </div>
    
    </>
  )
}

export default Navbar

