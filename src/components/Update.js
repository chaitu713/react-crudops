import React , {useState , useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Update() {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  
  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setMobileNumber(localStorage.getItem('Mobile Number'));
    setEmail(localStorage.getItem('Email ID'));
}, []);

const updateAPIData = () => {
  axios.put(`https://62136bd7f43692c9c6040808.mockapi.io/details/${id}`, {
      firstName,
      lastName,
      mobileNumber,
      email
  }).then(() =>{
    navigate('/read')
  })
}

  return (
    <div className="main">
      <h3 className="main-header">Update User</h3>
      <form className="create-frm">
      <div className="first-frm">
        <label>First Name</label>
        <input
          className="txtfield"
          type="text"
          placeholder="First Name"
          value={firstName}
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
          value={lastName}
          onChange={(e) => {
            e.preventDefault();
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="first-frm">
        <label>Mobile Number</label>
        <input
          className="txtfield"
          type="tel"
          placeholder="Mobile Number"
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
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
      </div>
      <button className="btn" type="button" onClick={updateAPIData}>
        Update
      </button>
    </form>
 
  </div>
  );   
}

export default Update;
