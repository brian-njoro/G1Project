import React, { useState } from 'react';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
      phone,
    });


    // Reset form fields after submitting
    setName('');
    setEmail('');
    setPassword('');
    setPhone('');
  };

  return (
    <div className='loginContainer'>
      <div className='loginForm'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            Email:
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password:
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>

          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}
