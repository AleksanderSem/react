import React from 'react';
import './Modal.scss';

const Modal = ({ users, userId, handleOpenModal }) => {
  const [user] = users.filter(u => u._id === userId);

  const closeModal = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("modal")) {
      handleOpenModal();
    }
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__content">
        <span className="close" onClick={handleOpenModal}>&times;</span>
        <div className="modal__header">
          <h4>{user.name}</h4>
        </div>
        <div className="modal__body">
          <p className="user__age">Age: {user.age}</p>
          <p className="user__gender">Gender: {user.gender}</p>
          <p className="user__phone">Phone: {user.phone}</p>
          <p className="user__email">Email: {user.email}</p>
          <p className="user__balance">Balance: {user.balance}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;