import React from 'react';
import './addUser.css';
import Toast from 'sweetalert2';


function AddUser({ onAdd, onEnter, onLeave,  validateName, 
validateMail, invalidName, invalidPhone, invalidEmail,  }) {

  //event submit and email, phone and name validations
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.phone.value)

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
    <div className='form-container'>
      <form onSubmit={handleOnSubmit}>
        <h2>Add User</h2>
        <input placeholder="Name" name="name" className='input' type="text" />
        <input placeholder="Phone" name="phone" className='input' type="number" />
        <input placeholder="Email" name="email" className='input' />
        <button onSubmit={handleOnSubmit} className="button" onMouseEnter={onEnter} onMouseLeave={onLeave}>Add</button>
      </form>
    </div>
  );
}

export default AddUser