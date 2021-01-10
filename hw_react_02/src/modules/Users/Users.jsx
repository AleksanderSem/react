import React from 'react';
import User from './User';
import './Users.scss';

const Users = ({ users, setUserId, handleOpenModal }) => {

  let usersList = users.map(user =>
    <User
      key={user._id}
      user={user}
      setUserId={setUserId}
      handleOpenModal={handleOpenModal}
    />);

  return (
    <section className="users">
      <div className="container">
        <div className="users__list">
          {usersList}
        </div>
      </div>
    </section>
  );
}

export default Users;