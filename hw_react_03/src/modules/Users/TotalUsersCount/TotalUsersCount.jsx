import React from 'react';
import './style.scss';

const TotalUsersCount = ({ users }) => {
  return (
    <p className="total">
      Total Users Count: {users.length}
    </p>
  )
}

export default TotalUsersCount;