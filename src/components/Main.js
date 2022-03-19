import React from 'react';
import {useNavigate} from 'react-router-dom';

function Main() {
    let navigate = useNavigate();
    const navigateCreate = () =>
    {
        navigate('/create');
    }

    const navigateRead = () =>
    {
        navigate('/read');
    }

  return (
    <div className='main'>
        <h1 className="main-header">React CRUD Operations</h1>
        <div>
        <button className="button-29" type = "button" onClick={navigateCreate}>Create User</button>
        <button className="button-29" type = "button" onClick={navigateRead}>Read Users</button>
        </div>
    </div>
  )
}

export default Main;

