import React from 'react';
import './App.css';
import UserList from './Components/UserList';
import AddUserForm from './Components/AddUserForm';

function App() {
  const handleAddUser = (newUser) => {
    // Handle adding new user to the list
    // For mock API, you can simulate adding by updating the state
    // Example: setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <h1>User CRUD App</h1>
      <AddUserForm onAddUser={handleAddUser} />
      <UserList />
    </div>
  );
}

export default App;