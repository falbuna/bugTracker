import React from 'react';
import './App.css';
import LoginButton from './component/LoginButton';
import LogoutButton from './component/LogoutButton';
import Profile from './component/Profile';
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
