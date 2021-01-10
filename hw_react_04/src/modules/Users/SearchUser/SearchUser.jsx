import React from 'react';
import Input from '../../../components/Input';
import './style.scss';

const SearchUser = ({ usersData, setUsers }) => {

  const handleSearchUser = (value) => {
    const result = usersData.filter(u => u.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    setUsers(result);
  }

  return (
    <form className='form-search'>
      <Input
        type="search"
        name="search-user"
        placeholder="Search user by name..."
        onChange={handleSearchUser}
      />
    </form>
  );
}

export default SearchUser;