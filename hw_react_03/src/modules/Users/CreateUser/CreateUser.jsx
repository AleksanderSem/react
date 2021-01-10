import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import './style.scss';

const CreateUser = ({ users, setUsers }) => {
  // function generate ID
  const genID = function () {
    const random = +(Math.random().toString().slice(2));
    const time = new Date().getTime();
    return ((random + time).toString(36));
  };

  const createUser = (target) => {
    const name = target.elements['name'].value;
    const surname = target.elements['surname'].value;
    const email = target.elements['email'].value;

    if (name && surname && email) {
      const newUser = {
        id: genID(),
        name, surname, email
      }

      users.push(newUser);
      setUsers([...users]);

      target.reset();
    } else {
      alert('Fill in all the fields')
    }

  }

  return (
    <form className="form-add-user" onSubmit={(e) => {
      e.preventDefault()
      createUser(e.target)
    }}>
      <Input type={'text'} name={'name'} placeholder={'Enter name...'} />
      <Input type={'text'} name={'surname'} placeholder={'Enter surname...'} />
      <Input type={'email'} name={'email'} placeholder={'Enter email...'} />
      <Button type="submit" buttonName={'Add User'} />
    </form>
  )
}

export default CreateUser;