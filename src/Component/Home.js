import React from 'react'
import Footer from '../Footer/footer'

function Home() {
  return (
    <>
    <div className="row">
      <div className="col-md-6">
     <div className="card text-bg-dark">
     <img src={process.env.PUBLIC_URL + '/laboratory.jpg'} alt="Example" />
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
    </div>
    <div className="col-md-6" >
      
    </div>
  </div>
  </div>
</div>
     <Footer/> 
    </>
  )

}

export default Home
