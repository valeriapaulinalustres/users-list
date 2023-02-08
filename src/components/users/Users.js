import React, { useEffect, useState } from "react";
import User from '../user/User';
import './users.css';
import gsap from "gsap";
import AddUser from "../addUser/AddUser.js";
import Toast from 'sweetalert2';

function Users() {

  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  //function for adding a new user
  const onAdd = async (name, phone, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //function for changing edit view
  function handleEdit() {
    setEdit(true)
  }

  //function for deleting users
  const deleteUser = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUsers = (newName, newPhone, newMail, id) => {
    let index = users.findIndex(el => el.id == id)
    users.splice(index, 1, { name: newName, phone: newPhone, email: newMail })
  }

  //button animation
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#ffffff", color: "#8dec8d", border: "1px solid #8dec8d", scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#8dec8d", color: "#000000", scale: 1 });
  };

   //validations
   const validateName = (nombre) => {
    if (!nombre) { invalidName() };
    if (typeof nombre !== "string") { invalidName() }
    let expReg = /^[A-Za-zÁáÉéÍíÓóÚúÑñÜú\s]+$/g.test(nombre);
    return expReg
  }

  const validateMail = (email) => {
    if (!email) { invalidEmail() };
    if (typeof email !== "string") { invalidEmail() }
    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return expReg
  }

  //alerts for invalid entries
  const invalidName = () => {
    Toast.fire({
      icon: 'warning',
      title: 'Invalid name'
    })
  }

  const invalidPhone = () => {
    Toast.fire({
      icon: 'warning',
      title: 'Invalid phone'
    })
  }

  const invalidEmail = () => {
    Toast.fire({
      icon: 'warning',
      title: 'Invalid email'
    })
  };

  const addUser = "Add User"

  return (
    <div>
      <AddUser 
      onAdd={onAdd}
      onEnter={onEnter}
      onLeave={onLeave} 
      validateName={validateName}
      validateMail={validateMail}
      invalidName={invalidName}
      invalidPhone={invalidPhone}
      invalidEmail={invalidEmail}
      addUser={addUser}
      />
      {edit ? <div><button onClick={() => setEdit(false)} className="button button-edit" onMouseEnter={onEnter} onMouseLeave={onLeave}>Back</button></div> : <button onClick={() => setEdit(true)} className="button button-edit" onMouseEnter={onEnter} onMouseLeave={onLeave}>Edit users</button>}
      <div className="card-container">
        {users.map((user, index) => (
          <User
            id={user.id}
            key={index}
            name={user.name}
            phone={user.phone}
            email={user.email}
            deleteUser={deleteUser}
            handleEdit={handleEdit}
            edit={edit}
            setEdit={setEdit}
            updateUsers={updateUsers}
            onEnter={onEnter}
            onLeave={onLeave}
            validateName={validateName}
            validateMail={validateMail}
            invalidName={invalidName}
            invalidPhone={invalidPhone}
            invalidEmail={invalidEmail}
          />
        ))}
      </div>
    </div>
  );
}

export default Users