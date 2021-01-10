import React, { useState, useEffect } from 'react';
import Users from '../Users';
import CreateUser from '../Users/CreateUser';
import TotalUsersCount from '../Users/TotalUsersCount';
import Modal from '../Modal';
import './Main.scss';

let usersData = JSON.parse(localStorage.getItem('usersLS')) || [];

const useUsers = () => {
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    localStorage.setItem('usersLS', JSON.stringify(usersData));
  }, [users]);

  // remove user
  const removeUser = (id) => {
    usersData = usersData.filter(u => u.id !== id)
    setUsers(usersData);
  }

  return { users, setUsers, removeUser }
}

const Main = () => {

  const { users, setUsers, removeUser } = useUsers();

  const [isOpenModal, setOpenModal] = useState(false);
  const [userModal, setUserModal] = useState({});

  const handleToggleModal = () => {
    setOpenModal(!isOpenModal);
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="users-wrapper">
            <CreateUser
              usersData={usersData}
              setUsers={setUsers}
            />
            <Users
              usersData={usersData}
              users={users}
              setUsers={setUsers}
              removeUser={removeUser}
              setUserModal={setUserModal}
              handleToggleModal={handleToggleModal}
            />
          </div>
          <TotalUsersCount users={users} />
        </div>
      </main>
      {
        isOpenModal &&
        <Modal
          userModal={userModal}
          handleToggleModal={handleToggleModal}
          usersData={usersData}
          setUsers={setUsers}
        />
      }
    </>
  );
}

export default Main;