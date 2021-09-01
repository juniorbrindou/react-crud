import './App.css';
import React, {useState, useEffect} from 'react'
import UserTable from './tables/UserTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUserForm from './forms/AddUserForm.js'
import axios from 'axios';
const App = () => {
  
  const [users, setUsers] = useState([{id:1, name:'', username:''}])
  useEffect(() => {
    axios.get("http://localhost:3001/user")
    .then(data=>setUsers(data.data))
  });

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
    axios.post("http://localhost:3001/users",user)
  }
  
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className="container m-3">
      <h1 className="m-5">Application de Crud React</h1>
      <div className="row">
        <div className="col-5">
          <h3>Ajoutez un utilisateurs</h3>
          <AddUserForm addUser={addUser}/>
        </div>

        <div className="float-right col-7">
          <h3>Afficher les utilisateur</h3>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
        
      </div>
    </div>
  )
}

export default App