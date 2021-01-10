import React from 'react';
import './User.scss';

const User = ({ user, removeUser, setUserModal, handleToggleModal }) => {

  const openModal = (e) => {
    if (!e.target.classList.contains('btn')) {
      setUserModal(user);
      handleToggleModal();
    }
  }

  return (
    <article className="user" onClick={openModal}>
      <div className="user__inner">
        <div className="user__info">
          <h4 className="user__name">{user.surname}</h4>
          <h3 className="user__name">{user.name}</h3>
          <p className="user__age">{user.email}</p>
        </div>
        <button type="button" className="btn" onClick={() => removeUser(user.id)}>Remove</button>
      </div>
    </article>
  );
}

export default User;