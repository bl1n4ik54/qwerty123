import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import User from './User';


const initUsers = [
  { id: '12e23', name: 'user1', surname: 'surn1', age: 30 },
  { id: '123412', name: 'user2', surname: 'surn2', age: 31 },
  { id: '123241251', name: 'user3', surname: 'surn3', age: 32 },
];


function App() {

  return (
    <>
      {initUsers.map(user => <User key={user.id} name={user.name} surname={user.surname} age={user.age} />)}
    </>
  )

}
export default App;