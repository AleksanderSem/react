import React from 'react';
import './User.scss';

const User = ({ user, setUserId, handleOpenModal }) => {

  const openModal = () => {
    setUserId(user._id);
    handleOpenModal();
  }

  return (
    <article className="user" onClick={openModal}>
      <div className="user__inner">
        <div className="user__photo">
          <img src={user.picture} alt="user" />
        </div>
        <div className="user__info">
          <h3 className="user__name">{user.name}</h3>
          <p className="user__age">Age: {user.age}</p>
          <p className="user__gender">Gender: {user.gender}</p>      
          <p className="user__balance">Balance: {user.balance}</p>
        </div>
      </div>
    </article>
  );
}

export default User;