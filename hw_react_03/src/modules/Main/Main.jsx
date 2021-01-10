import React, { useState } from 'react';
import Users from '../Users';
import CreateUser from '../Users/CreateUser';
import TotalUsersCount from '../Users/TotalUsersCount';
import './Main.scss';

const usersData = [];

const Main = ({ setUserModal, handleToggleModal }) => {
  const [users, setUsers] = useState(usersData);

  // remove user
  const removeUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  }

  return (
    <main>
      <div className="container">
        <div className="users-wrapper">
          <CreateUser users={users} setUsers={setUsers} />
          <Users
            users={users}
            removeUser={removeUser}
            setUserModal={setUserModal}
            handleToggleModal={handleToggleModal}
          />
        </div>
        <TotalUsersCount users={users} />
      </div>
    </main>
  );
}

export default Main;