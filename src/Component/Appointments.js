import React from 'react'

function Appointments() {
  return (
    <>
    <div className='container-fluid my-5'>
    <form className="row g-3">
  <div className="col-md-3">
    <label for="text" className="form-label">Patient Name</label>
    <input type="text" className="form-control" id="inputEmail4" placeholder='please enter your real name'/>
  </div>
  {/* <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
</div> */}
<div className="col-3">
  <label for="patientid" className="form-label">Patient Id </label>
  <input type="text" className="form-control" id="patientid" placeholder="Please provide government id"/>
</div>
  <div className="col-3">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-md-3">
    <label for="inputCity" className="form-label">Doctor Name</label>
    <input type="text" className="form-control" id="inputCity" placeholder='Doctor Name'/>
  </div>
  <div className="col-md-3">
    <label for="inputCity" className="form-label">Disease</label>
    <input type="text" className="form-control" id="inputCity" placeholder='Disease'/>
  </div>
  {/* <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div> */}
  <div className="col-md-2">
    <label for="inputZip" className="form-label" >Meeting time</label>
    <input type="text" className="form-control" placeholder='9-12 pm' id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-6">
    <button type="submit" className="btn btn-primary">Book Appointment</button>
  </div>
  <div className="col-6 ">
    <button type="submit" className="btn btn-primary">Book Appointment with id?</button>
  </div>
</form>
    </div>
    </>
  )
}

export default Appointments
