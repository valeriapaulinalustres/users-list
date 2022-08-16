import React, { useEffect, useState } from "react";
import User from '../user/User';
import './users.css';
import gsap from "gsap";
import AddUser from "../addUser/AddUser.js";

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

  return (
    <div>
      <AddUser 
      onAdd={onAdd}
      onEnter={onEnter}
      onLeave={onLeave} 
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
          />
        ))}
      </div>
    </div>
  );
}

export default Users