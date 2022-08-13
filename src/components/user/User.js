import React,{useRef} from 'react';
import './user.css';
import Swal from 'sweetalert2';
import gsap from 'gsap';


function User({id,email,name, phone, onDelete, handleEdit, deleteUser, edit, setEdit, updateUsers}) {

const inputNameRef = useRef()
const inputMailRef = useRef()
const inputPhoneRef = useRef()

    const handleDelete = () => {
      Swal.fire({
        title: 'Do you want to delete the user?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
        confirmButtonColor: "#8dec8d",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          deleteUser(id)
          Swal.fire('User deleted')
        } else if (result.isDenied) {
          Swal.fire('User hasn´t been deleted')
        }
      }) 
      
      
        
    }

   
  const handleSave = ()=>{
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      confirmButtonColor: "#8dec8d"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        updateUsers(inputNameRef.current.value,  inputPhoneRef.current.value, inputMailRef.current.value, id)
        Swal.fire('Changes has been saved')
      } else if (result.isDenied) {
        Swal.fire('Changes has not been saved')
      }
    }) 
  
    
 }

 
 const onEnterUser = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: "#ffffff", color:"#8dec8d", border:"1px solid #8dec8d", scale: 1.2 });
};

const onLeaveUser = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: "#8dec8d", color:"#000000", scale: 1 });
};

const renderEdit = () =>{
    return <div className='input-edit-container'>
        <input
        type="text"
        defaultValue={ name }
        ref={inputNameRef}
        id={id}
        className="input"
        />
         <input
        type="text"
        defaultValue={ phone }
        ref={inputPhoneRef}
        id={id}
        className="input"
        />
      <input
        type="text"
        defaultValue={ email }
        ref={inputMailRef}
        id={id}
        className="input"
        />
        <button onClick={handleSave} className="button"  onMouseEnter={onEnterUser} onMouseLeave={onLeaveUser}>Save</button>
    </div>
}


 const renderUser = () =>{
        return <div className='card'>
    <div className='card-header'>
    <h2>{name}</h2>
    
    <button onClick={handleDelete} className="button" onMouseEnter={onEnterUser} onMouseLeave={onLeaveUser}>Delete</button>
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