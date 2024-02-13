import { useState } from 'react';
import PropTypes from 'prop-types'

import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';

function App() {
//   const data = "Faisal";
//   const [myName, setMyName] = useState(data);
//   const [count, setCount] = useState(0);

//   const changeName = () => {
//     setMyName("Hello Everyone");
//     setCount(count + 1);
//     setValues({ email: "", textarea: "" });
//   };
//  const handleInpurChange=(e)=>{

//   const {name,value}=e.target;
//   setValues({...myval,[name]:value});
//  }

//   const [myval, setValues] = useState({ email: "", textarea: "" });

//  const [click1,click2]=useState('pleaseclick')
//  const ToggleEvent1=()=>{
//   let val=click1
//   if(val==='pleaseclick'){
//     click2('Your Welcome')
//   }
//   else{
//     click2('pleaseclick')
//   }
//  }


  return (
    <>
      {/* <p>Your Entered Values are {myval.email} and {myval.textarea}</p>
      <h1>{myName}</h1>

      <h3>{click1}</h3>
      <p>You clicked me {count} times</p>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" value={myval.email} name='email' onChange={handleInpurChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={myval.textarea} name='textarea' onChange={handleInpurChange} id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button className='btn button-n' onClick={changeName}>Submit</button>
      <button className='btn color-brder' onClick={ToggleEvent1}>toggle button</button> */}


      <Navbar title="iCare"/>
     
    </>
  );
}
Navbar.PropTypes={
  title:PropTypes.string.isRequired,


}
Navbar.defaultProps={
  title:"put your title "
}
export default App;
