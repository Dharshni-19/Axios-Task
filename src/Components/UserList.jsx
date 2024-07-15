import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (response.status === 200) {
          setUsers(users.filter(user => user.id !== userId));
        }
      })
      .catch(error => {
        console.error('Error deleting user: ', error);
      });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;