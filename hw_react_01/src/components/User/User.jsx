import React from 'react';
import User from './User/User';
import './User.css';

const User = ({ user }) => {

  let userList = user.map(user => <User key={user._id} user={user} />);

  return (
    <section className="user">
      <div className="container">
        <div className="user__list">
          {usersList}
        </div>
      </div>     
    </section>
  );
}

export default User;