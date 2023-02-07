import React, { useRef } from 'react';
import './user.css';
import Swal from 'sweetalert2';

function User({ id, email, name, phone, deleteUser, edit, updateUsers, onEnter, onLeave, validateName, 
  validateMail, invalidName, invalidPhone, invalidEmail }) {

  const inputNameRef = useRef()
  const inputMailRef = useRef()
  const inputPhoneRef = useRef()

  //function for deleting users
  const handleDelete = () => {
    Swal.fire({
      title: 'Do you want to delete the user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      confirmButtonColor: "#8dec8d",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id)
        Swal.fire('User deleted')
      } else if (result.isDenied) {
        Swal.fire('User hasn´t been deleted')
      }
    })
  }

  //function for saving changes in users
  const handleSave = () => {
    
    const validName = validateName(inputNameRef.current.value);
    if (!validName) return invalidName();

    if (inputPhoneRef.current.value == "") return invalidPhone();

    const validEmail = validateMail(inputMailRef.current.value);
    if (!validEmail) return invalidEmail();

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      confirmButtonColor: "#8dec8d"
    }).then((result) => {
      if (result.isConfirmed) {
        updateUsers(inputNameRef.current.value, inputPhoneRef.current.value, inputMailRef.current.value, id)
        Swal.fire('Changes has been saved')
      } else if (result.isDenied) {
        Swal.fire('Changes has not been saved')
      }
    })
  }

  //function for rendering edit mode
  const renderEdit = () => {
    return <div className='input-edit-container'>
      <input
        type="text"
        defaultValue={name}
        ref={inputNameRef}
        id={id}
        className="input"
      />
      <input
        type="text"
        defaultValue={phone}
        ref={inputPhoneRef}
        id={id}
        className="input"
      />
      <input
        type="text"
        defaultValue={email}
        ref={inputMailRef}
        id={id}
        className="input"
      />
      <button onClick={handleSave} className="button" onMouseEnter={onEnter} onMouseLeave={onLeave}>Save</button>
    </div>
  }

  //function for rendering users list mode
  const renderUser = () => {
    return <div className='card' role="userContainer">
      <div className='card-header'>
        <h2 role="userName">{name}</h2>
        <button onClick={handleDelete} className="button" onMouseEnter={onEnter} onMouseLeave={onLeave}>Delete</button>
      </div>
      <h3>phone: {phone}</h3>
      <h3>email: {email}</h3>
    </div>
  }

  return (
    <div>
      {edit
        ? renderEdit()
        : renderUser()
      }
    </div>
  )
}

export default User