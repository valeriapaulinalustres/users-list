import React from 'react';
import './addUser.css';
import Toast from 'sweetalert2';


function AddUser({ onAdd, onEnter, onLeave,  validateName, 
validateMail, invalidName, invalidPhone, invalidEmail, addUser }) {

  //event submit and email, phone and name validations
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const validName = validateName(e.target.name.value);
    if (!validName) return invalidName();

    if (e.target.phone.value == "") return invalidPhone();

    const validEmail = validateMail(e.target.email.value);
    if (!validEmail) return invalidEmail();

    onAdd(e.target.name.value, e.target.phone.value, e.target.email.value);
    e.target.name.value = "";
    e.target.phone.value = "";
    e.target.email.value = "";

    Toast.fire({
      icon: 'success',
      title: 'Added successfully'
    })

  }

 

  return (
    <div className='form-container' role='formContainer'>
      <form onSubmit={handleOnSubmit}>
        <h2>{addUser}</h2>
        <input placeholder="Name" name="name" data-testid="filter-input-name" className='input' type="text" />
        <input placeholder="Phone" name="phone" data-testid="filter-input-phone" className='input' type="number" />
        <input placeholder="Email" name="email" data-testid="filter-input-email" className='input' />
        <button 
        onSubmit={handleOnSubmit} 
        className="button" 
        role="buttonSubmit" 
        name="submitButtonS"
        onMouseEnter={onEnter} 
        onMouseLeave={onLeave}>Add</button>
      </form>
    </div>
  );
}

export default AddUser