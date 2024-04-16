import React, { useState } from 'react';

import HandleServer from './ServerCalls';
const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventdefault()
    try {
        const obj = { username, email, password };
        await HandleServer(obj, "new user");
        setUsername('');
        setEmail('');
        setPassword('');
    } 
      // Clear input fields after successful submission
  
     catch (error) {
      console.error('Error creating user:', error);
    }
  };
  const GetUser = async () => {

    try {
      const obj = {   username,
        password}
      const response=  await HandleServer(obj, "Get user email");


      console.log('Email:', response.data);
      
      // Clear input fields after successful submission

    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Create User</button>
      <br></br>
  
    </form>
        <button onClick={GetUser}>get user</button>
        </div>
  );
};

export default CreateUser;
