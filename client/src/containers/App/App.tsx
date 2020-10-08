import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import apis from '../../apis';
import { metamaskConnect } from '../../authentication/web3';
import './App.css';
import Login from '../../components/Login/Login';
import Dashboard from '../Dashboard/Dashboard';



function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string>('');

  return !loggedIn ? (
    <div>
      <Login setLoggedIn={setLoggedIn} setAuthToken ={setAuthToken}/>
    </div>
  ) : (
    <div>
      <Dashboard/>
    </div>
  );
}

export default App;
