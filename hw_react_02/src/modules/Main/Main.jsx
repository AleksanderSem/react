import React from 'react';
import Users from '../Users';
import './Main.scss';

const Main = ({ users, setUserId, handleOpenModal }) => {

  return (
    <main>
      <Users users={users} setUserId={setUserId} handleOpenModal={handleOpenModal} />
    </main>
  );
}

export default Main;