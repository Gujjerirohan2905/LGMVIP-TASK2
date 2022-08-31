import React, { useState } from 'react'
import '../css/Navbar.css';
import axios from 'axios';
import Loading from './Loading';
export default function Navbar() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  function getusers() {
    setLoading(false);
    axios.get('https://reqres.in/api/users?page=1')
      .then((response) => {

        const Users = response.data.data
        setUser(Users);
        
        setLoading(true);
      });
  };
  
  return (
    <>
      <div className='navbar'>
        <button className='btn' onClick={() => getusers()}><i>Get Users</i></button>
        <h2>WEB APPLICATION API USERS</h2>
        
      </div><br></br>

      <div>

        <center>

          <div className='row'>

            {loading ?
              users.map((user) => (
                <div className='col' key={user.id}>
                  <div className='card'>
                    <img src={user.avatar} alt="avatar" width="200px" />
                    <b>{user.first_name} {user.last_name}</b><br></br>
                    {user.email}<br></br>
  
                  </div>
                </div>
              )):<Loading/>
            }
          </div>
        </center>
      </div>
    </>
  )
}

