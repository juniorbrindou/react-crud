import './App.css';
import React, {useState} from 'react'
import UserTable from './tables/UserTable'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const [users, setUsers] = useState(usersData)
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  

  return (
    <div className="container m-3">
      <h1 className="m-5">React Crud Application</h1>
      <div className="row">
        <div className="col-5">
          <h3>Ajoutez un utilisateur</h3>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="float-right col-7">
          <h3>Afficher les utilisateur</h3>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App