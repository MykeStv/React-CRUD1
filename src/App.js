import React, { useState } from 'react';
import './App.css';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

import { v4 as uuidv4 } from 'uuid'; //Libreria para generar id automaticos conla funcion : uuidv4();


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //State
  const [users, setUsers] = useState(usersData);

  // Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4();

    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuario
  const deleteUser = (id) => {
    // console.log(id);

    //Modifica el array users y guarda aquellos que tengan el id diferente al parametro que se esta pasando
    setUsers( users.filter(user => user.id !== id) )

  }

  // state para el edit
  const [editing, setEditing] = useState(false);

  //state para el usuario actual seleccionado para editar
  const initialForm = {
    id: null,
    name: '',
    username: ''
  }
  const [currentUser, setCurrentUser] = useState(initialForm);

  //Metodo para editar el usuario actual
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        
        <div className="flex-large">
          
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm currentUser={currentUser} />
              </div>      
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
          
        </div>

        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
            users={users} 
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
