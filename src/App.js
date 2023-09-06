import React, { useState } from 'react';
import Adding from './components/Users/Adding';
import List from './components/Users/List';

function App() {

  const [userList, setUserList]=useState([]);

  const addUser=(username,userage)=>{
    setUserList((prev)=>{
      return [...prev, {name: username, age: userage, id: Math.random().toString()}]
    });
  }
  return (
    <div>
      <Adding onAdd={addUser} />
      <List users={userList}/>
    </div>
  );
}

export default App;
