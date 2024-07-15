import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = ({ onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { name, email };

    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        if (response.status === 201) {
          onAddUser(newUser);
          setName('');
          setEmail('');
        }
      })
      .catch(error => {
        console.error('Error adding user: ', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;