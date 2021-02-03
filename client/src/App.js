import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Profile from './component/Profile';
import Login from './pages/Login';
import Sidebar from './component/Sidebar';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './component/Navbar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <Router>
    <>
      <Login />
      <Navbar />
      <div className="h-screen flex overflow-hidden bg-white">
      <Sidebar />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/projects" component={Projects} />
      {/* <Profile /> */}
      </div>
    </>
    </Router>
  );
}

export default App;
