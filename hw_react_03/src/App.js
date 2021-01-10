import React, { useState } from 'react';
import Main from './modules/Main';
import Modal from './modules/Modal';
import './App.scss';

function App() {

  const [isOpenModal, setOpenModal] = useState(false);

  const handleToggleModal = () => {
    setOpenModal(!isOpenModal);
  }

  const [userModal, setUserModal] = useState({});

  return (
    <div className="wrapper">
      <Main setUserModal={setUserModal} handleToggleModal={handleToggleModal} />
      {isOpenModal && <Modal userModal={userModal} handleToggleModal={handleToggleModal} />}
    </div>
  );
}

export default App;
