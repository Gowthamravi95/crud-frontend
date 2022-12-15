import React,{useContext}from 'react'
import { AppContext } from '../../App'
export default function Table() {

    const {users,setFormData,deleteUser}=useContext(AppContext);

    const handleEditUser=(user)=>{
        setFormData(formData=>({...formData,
            _id:user._id,
            name:user.name,
            location:user.location,
            age:user.age,
            isEdit:1
                }))
    }
    const handleDeleteUser =(user)=>{
        // const newUsers =[...users]
        // const index =users.findIndex((users)=>users.id === user.id)
        // newUsers.splice(index,1);
        // setUsers(newUsers);
        deleteUser(user)
    }

  return (
    <div>
         <table className="table table-hover ">
    <thead>
      <tr className='table-warning'>
        <th>Name</th>
        <th>Location</th>
        <th>Age</th>
        <th className='text-center'>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user)=>(
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.location}</td>
                <td>{user.age}</td>
                <td className='text-center'>
                    <button className='btn btn-success' onClick={()=>handleEditUser(user)}>Edit</button>
                    <button className='btn btn-danger mx-2' onClick={()=>handleDeleteUser(user)}>Delete</button>
                </td>
            </tr>

        ))
      }
     
    </tbody>
  </table>
      
    </div>
  )
}
