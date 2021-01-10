import React from 'react';
import User from './User';
import './Users.scss';

const Users = ({ users, removeUser, setUserModal, handleToggleModal }) => {

  let usersList = users.map(user =>
    <User
      key={user.id}
      user={user}
      removeUser={removeUser}
      setUserModal={setUserModal}
      handleToggleModal={handleToggleModal}
    />);

  return (
    <section className="users">
      <div className="users__list">
        {usersList}
      </div>
    </section>
  );
}

export default Users;