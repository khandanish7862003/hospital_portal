import React from 'react'
import Footer from '../Footer/footer'

function Doctors() {
  return (
   
      <>
       
      <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
    <img src={process.env.PUBLIC_URL + '/austin.jpg'} alt="Example" />
      <div className="card-body">
        <h5 className="card-title">Dr.  Austin Hamburger</h5>
        <p className="card-text">Meet Dr. Austin Hamburger, our esteemed Cardiologist with 10 years of experience in Cardiolosit. Dr. Hamburger is dedicated to providing compassionate care and personalized treatment to every patient.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={process.env.PUBLIC_URL + '/briaver.jpg'} alt="Example" />
      <div className="card-body">
        <h5 className="card-title">Dr.Bravier Teesta</h5>
        <p className="card-text">"Introducing Dr.Bravier Teesta, our renowned ortho expert. With over 10 years of dedicated practice in orthopedix, Dr.Teesta brings unparalleled expertise and compassion to our team. She is very much polite with patient</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={process.env.PUBLIC_URL + '/usman-yo.jpg'} alt="Example" />
      <div className="card-body">
        <h5 className="card-title">Dr.Usman Yousef</h5>
        <p className="card-text">Dr.Yousefis dedicated to providing compassionate care and personalized treatment to every patient.With the focus on Surgery.He has done lots of surgery with the success rate 100%.And lots of pateint are thankful for him</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src={process.env.PUBLIC_URL + '/rodge.jpg'} alt="Example" />
      <div className="card-body">
        <h5 className="card-title">Dr.Rodge</h5>
        <p className="card-text">"Meet Dr.Rodge D'souza, our esteemed neurologist with 5 years of experience in Neurosurgeon</p>
      </div>
    </div>
  </div>
</div>
</div>
<Footer/>
      </>
   
    
  )
}

export default Doctors
