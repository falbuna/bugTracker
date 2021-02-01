import React from 'react';
import './App.css';
// import LoginButton from './component/LoginButton';
import LogoutButton from './component/LogoutButton';
// import Profile from './component/Profile';
import Login from './pages/Login';
import Sidebar from './component/Sidebar'
import Home from './pages/Home';
import { useAuth0 } from '@auth0/auth0-react'
import Navbar from './component/Navbar';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Login />
      <Navbar />
      <div className="h-screen flex overflow-hidden bg-white">
      <Sidebar />
      <Home />
      <LogoutButton />
      {/* <Profile /> */}
      </div>
    </>
  );
}

export default App;
