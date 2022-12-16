import React,{createContext,useEffect,useState} from "react";

import Home from "./components/pages/Home";
import axios from 'axios';


export const AppContext=createContext();


function App() {
const [users,setUsers]=useState([]);
const [formData,setFormData]=useState({
  _id:"",
  name:"",
  location:"",
  age:"",
  isEdit:0
})



const getUser =async()=>{
  await axios.get('https://crudapi-gowtham95.onrender.com/api/users')
  .then((res)=>setUsers(res.data))
}


useEffect(()=>{
  
  getUser();
},[])

const postUser =async(newUser)=>{
  await axios.post('https://crudapi-gowtham95.onrender.com/api/users/add',newUser)
  getUser()
 
 }
const putUser =async(updateUser)=>{
  await axios.put('https://crudapi-gowtham95.onrender.com/api/users/update',updateUser)
  getUser();
  
  

 }

 const deleteUser =async(deleteUser)=>{
   let option =window.confirm(`are you sure you want to delete ${deleteUser.name}`)
   if(option){
    await axios.delete(`https://crudapi-gowtham95.onrender.com/api/users/del/${deleteUser._id}`)
    getUser();
  

   }

   

 }
  return (
    <AppContext.Provider value={{
      users,
      setUsers,
      formData,
      setFormData,
      postUser,
      putUser,
      deleteUser
      
    }}>
      <Home/>
    </AppContext.Provider>
  );
}

export default App;
