import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './component/Sidebar';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './component/Navbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Projects from './pages/Projects';
import Tickets from './pages/Tickets';
import ProjectDetails from './pages/ProjectDetails';
import TicketDetails from './pages/TicketDetails';
import UserDetails from './pages/UserDetails';

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
      <Route exact path="/users" component={Users} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/tickets" component={Tickets} />
      <Route exact path="/projects/:id" component={ProjectDetails} />
      <Route exact path="/tickets/:id" component={TicketDetails} />
      <Route exact path="/users/:id" component={UserDetails} />
      </div>
    </>
    </Router>
  );
}

export default App;
