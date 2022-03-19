import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {

  let navigate=useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
    const postData = (e) => {
        e.preventDefault();
        axios.post(`https://62136bd7f43692c9c6040808.mockapi.io/details`, {
            firstName,
            lastName,
            mobileNumber,
            email
    }).then(()=>{
      navigate('/read')
    })
  }
return(
  <div className="main">
    <h3 className="main-header">Create User</h3>
    <form className="create-frm">
    <div className="first-frm">
      <label>First Name</label>
      <input
        className="txtfield"
        type="text"
        placeholder="First Name"
        required
        onChange={(e) => {
          e.preventDefault();
          setFirstName(e.target.value);
        }}
      />
    </div>
    <div className="first-frm">
      <label>Last Name</label>
      <input
        className="txtfield"
        type="text"
        placeholder="Last Name"
        
        onChange={(e) => {
          e.preventDefault();
          setLastName(e.target.value);
        }}
        required
      />
    </div>
    <div className="first-frm">
      <label>Mobile Number</label>
      <input
        className="txtfield"
        type="tel"
        placeholder="Mobile Number"
        required
        onChange={(e) => {
          e.preventDefault();
          setMobileNumber(e.target.value);
        }}
      />
    </div>
    <div className="first-frm">
      <label>Email ID</label>
      <input
        className="txtfield"
        type="email"
        placeholder="Email"
        required
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
      />
    </div>
    <button className="btn" type="submit" onClick={postData}>
      Submit
    </button>
  </form>
  </div>
  
    ); 
}

export default Create;