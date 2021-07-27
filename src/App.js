import React, { useState } from 'react';
import './components/Users/AddUser';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

// cria o componente APP
const  App = () => {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {

    setUsersList((prevUsersList) => {

      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];

    });

  };
  
  //retorna o HTML/JSX
  return (
    <div>
      < AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
