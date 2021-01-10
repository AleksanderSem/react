import React, { useState } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import './Modal.scss';

const Modal = ({ userModal, handleToggleModal, usersData, setUsers }) => {
  const [name, setName] = useState(userModal.name);
  const [surname, setSurname] = useState(userModal.surname);
  const [email, setEmail] = useState(userModal.email);

  const closeModal = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("modal")) {
      handleToggleModal();
    }
  }

  const updateUser = (target) => {
    const name = target.elements['name'].value;
    const surname = target.elements['surname'].value;
    const email = target.elements['email'].value;

    if (name && surname && email) {
      usersData.forEach(user => {
        if (user.id === userModal.id) {
          user.name = name;
          user.surname = surname;
          user.email = email;
        }
      })

      setUsers(usersData);
      localStorage.setItem('usersLS', JSON.stringify(usersData));
    }

    handleToggleModal();

  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__content">
        <span className="close" onClick={handleToggleModal}>&times;</span>
        <form className="form-update-user" onSubmit={(e) => {
          e.preventDefault()
          updateUser(e.target)
        }}>

          <Input
            type={'text'}
            name={'name'}
            value={name}
            onChange={(value) => setName(value)}
          />
          <Input
            type={'text'}
            name={'surname'}
            value={surname}
            onChange={(value) => setSurname(value)}
          />
          <Input
            type={'email'}
            name={'email'}
            value={email}
            onChange={(value) => setEmail(value)}
          />

          <Button buttonName={'Update User'} />

        </form>
      </div>
    </div>

  )
}

export default Modal;