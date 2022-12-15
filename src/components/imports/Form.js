import React, { useContext } from 'react'
import { AppContext } from '../../App'
export default function Form() {

const {formData,setFormData,postUser,putUser}=useContext(AppContext)

const resetFormData={
    name:"",
    location:"",
    age:""
}

const handleFormChange=(e)=>{

    const {name,value} =e.target;
    setFormData(formData=>({...formData,[name]:value}))
}

    const handleFormSubmit =(e)=>{
        e.preventDefault();

        if(!formData.isEdit){
            const newUser ={
                name: formData.name,
                age: formData.age,
                location: formData.location
            }
            postUser(newUser)
            setFormData(resetFormData);
           
        }else{
            const updateUser ={
                _id:formData._id,
                name: formData.name,
                age: formData.age,
                location: formData.location,
                isEdit: 1
            }
            // const index =users.findIndex((users)=>users.id === formData.id)
            // const newUsers =[...users]
            // newUsers[index] =updateUser;
            putUser(updateUser)
            setFormData(resetFormData);

        }


    }
  return (
    <div>
       <form onSubmit={handleFormSubmit}>
         <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name" value={formData.name} onChange={handleFormChange} name="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" placeholder="Enter Location" value={formData.location} onChange={handleFormChange} name="location"/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" placeholder="Enter age" value={formData.age} onChange={handleFormChange} name="age"/>
            </div>
            
            <button type="submit" className="btn btn-primary">{formData.isEdit?"update":"Create"}</button>
            {
                formData.isEdit? <button className='btn btn-primary mx-2' onClick={()=>setFormData(resetFormData)}> Cancel</button>: " "
               
            }
            </form> 
    </div>
  )
}
