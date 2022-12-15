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

const postUser =(newUser)=>{
 return axios.post('http://localhost:3005/api/users/add',newUser)


 
}




useEffect(()=>{
  const getUser =()=>{
    axios.get('http://localhost:3005/api/users')
    .then((res)=>setUsers(res.data))
  }
  getUser();
},[users])


const putUser =(updateUser)=>{
  axios.put('http://localhost:3005/api/users/update',updateUser)


 }

 const deleteUser =(deleteUser)=>{
   let option =window.confirm(`are you sure you want to delete ${deleteUser.name}`)
   if(option){
    axios.delete(`http://localhost:3005/api/users/del/${deleteUser._id}`)
    

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
