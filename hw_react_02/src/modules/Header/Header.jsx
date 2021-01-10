import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import customSort from '../../sort';
import './Header.scss';

const Header = ({ setUsers, userData }) => {

  const handleSerchUsers = (value) => {
    const result = userData.filter(user => user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    setUsers(result);
  }

  const handleSortUsers = (value) => {
    setUsers(customSort(userData, value));
  }

  const handleReset = (e) => {
    setUsers(userData);
    e.target.closest("form").reset()
  }

  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__inner">
          <a href="#s" >
            <img width="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" alt="Logo" />
          </a>

          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              handleSerch={handleSerchUsers}
              type={'search'}
              name={'search'}
              placeholder={'Search user...'}
            />

            <Select
              handleSort={handleSortUsers}
              name={'sort'}
            />

            <Button handleReset={handleReset} />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;