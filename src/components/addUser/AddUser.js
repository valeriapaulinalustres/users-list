import React from 'react';
import './addUser.css';
import Toast from 'sweetalert2';
import gsap from 'gsap';


function AddUser({onAdd}) {

    const handleOnSubmit = (e) => {
      e.preventDefault();
      console.log(e.target.phone.value)
   
    const validName = validateName( e.target.name.value);
    if (!validName) return invalidName();

    if ( e.target.phone.value == "") return invalidName();
   
    const validEmail = validateMail( e.target.email.value);
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
       
    const onEnterAdd = ({ currentTarget }) => {
      gsap.to(currentTarget, { backgroundColor: "#ffffff", color:"#8dec8d", border:"1px solid #8dec8d", scale: 1.2 });
    };
    
    const onLeaveAdd = ({ currentTarget }) => {
      gsap.to(currentTarget, { backgroundColor: "#8dec8d", color:"#000000", scale: 1 });
    };
      return (
        <div className='form-container'>
          <form onSubmit={handleOnSubmit}>
            <h2>Add User</h2>
            <input placeholder="Name" name="name" className='input' type="text" />
            <input placeholder="Phone" name="phone" className='input' type="number"/>
            <input placeholder="Email" name="email" className='input'/>
            <button onSubmit={handleOnSubmit} className="button" onMouseEnter={onEnterAdd} onMouseLeave={onLeaveAdd}>Add</button>           
          </form>
        </div>
      );
}

export default AddUser