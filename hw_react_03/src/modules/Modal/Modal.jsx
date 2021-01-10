import React, { useState } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import './Modal.scss';

const Modal = ({ userModal, handleToggleModal }) => {
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
      userModal.name = name;
      userModal.surname = surname;
      userModal.email = email;
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
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type={'text'}
            name={'surname'}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <Input
            type={'email'}
            name={'email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button buttonName={'Update User'} />

          {/* <p>{userModal.name}</p>
          <Input type={'text'} name={'name'} />
          <p>{userModal.surname}</p>
          <Input type={'text'} name={'surname'} />
          <p>{userModal.email}</p>
          <Input type={'email'} name={'email'} /> */}
        </form>
      </div>
    </div>

  )
}

export default Modal;

