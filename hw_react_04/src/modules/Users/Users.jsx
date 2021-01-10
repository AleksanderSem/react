import React from 'react';
import SearchUser from './SearchUser'
import User from './User';
import './Users.scss';

const Users = ({
  usersData,
  users,
  setUsers,
  removeUser,
  setUserModal,
  handleToggleModal
}) => {

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
      <SearchUser usersData={usersData} setUsers={setUsers} />
      <div className="users__list">
        {usersList}
      </div>
    </section>
  );
}

export default Users;