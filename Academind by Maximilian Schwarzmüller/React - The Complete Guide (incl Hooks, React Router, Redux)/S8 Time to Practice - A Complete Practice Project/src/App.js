import React, { useState } from "react";
import AddUser from './components/Users/AddUser';
import UsersList from "./components/Users/UsersList";


function App() {
  const [users, setUsers] = useState([])
  const addUserHandler =(userName, userAge)=> {
    setUsers(prev => [{name: userName, age: userAge, id: Math.random().toString()}, ...prev ])
  }
  return (
    <div>
      <AddUser onUserChange={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
