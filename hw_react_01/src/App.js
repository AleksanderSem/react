import React, { useState } from 'react';
import { userData } from './userData';
import Users from './components/User/User';
import Headers from './components/Headers/Heders';
import customSort from './sort';
import './App.css';

function App() {

  const [user, setUsers] = useState(userData);

  const handleSerchUsers = (value) => {
    const result = userData.filter(user => user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    setUsers(result);
  }

  const handleSortUsers = (value) => {
    setUsers(customSort(userData, value));
  }

  const handleReset = () => {
    setUsers(userData);
  }

  return (
    <div className="wrapper">
      <Headers handleSerchUsers={handleSerchUsers} handleSortUsers={handleSortUsers} handleReset={handleReset} />
      <Users users={user} />
    </div>
  );
}

export default App;