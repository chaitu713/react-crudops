import React, { useEffect, useState } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62136bd7f43692c9c6040808.mockapi.io/details`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) =>
  {
    let { id, firstName, lastName, mobileNumber, email } = data;
    localStorage.setItem('ID',id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Mobile Number', mobileNumber);
    localStorage.setItem('Emai ID', email);
  }

  const getData = () => {
    axios.get(`https://62136bd7f43692c9c6040808.mockapi.io/details`)
        .then((getData) => {
            setAPIData(getData.data);
        })
}

  const onDelete = (id) => {
    axios.delete(`https://62136bd7f43692c9c6040808.mockapi.io/details/${id}`)
    .then(() => {
        getData();
    })
}



  return (
    <div className="main mbl">
      <h3 className="main-header mbl">Read Users</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Email ID</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.mobileNumber}</td>
                <td>{data.email}</td>
                <td>
                  <Link to="/update">
                    <IconButton className = "icbutton" aria-label="edit" color="primary" onClick={() => setData(data)}>
                      <EditOutlinedIcon />
                    </IconButton>
                  </Link>
                </td>
                <td>
                    <IconButton className = "icbutton" aria-label="delete" color="primary" onClick={() => onDelete(data.id)}>
                      <DeleteOutlinedIcon />
                    </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
