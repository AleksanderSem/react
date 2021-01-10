import React, { useState } from 'react';
import { userData } from './userData';
import Header from './modules/Header';
import Main from './modules/Main';
import Modal from './modules/Modal';
import './App.scss';

function App() {

  const [users, setUsers] = useState(userData);

  const [isOpenModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!isOpenModal);
  }

  const [userId, setUserId] = useState('');

  return (
    <div className="wrapper">
      <Header setUsers={setUsers} userData={userData} />
      <Main users={users} setUserId={setUserId} handleOpenModal={handleOpenModal} />
      {isOpenModal && <Modal users={users} userId={userId} handleOpenModal={handleOpenModal} />}
    </div>
  );
}

export default App;
