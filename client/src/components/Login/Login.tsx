import React, { useState } from 'react';
import apis from '../../apis'

interface LoginProps {
  setLoggedIn: (arg0: boolean) => void;
  setAuthToken: (arg0: string) => void;
}


export default function Login({ setLoggedIn, setAuthToken }: LoginProps): JSX.Element {

  const [username, setUsername] = useState <any>('')
  const [password, setPassword] = useState <any>('')
  const [errorMessage, setErrorMessage] = useState <boolean>(false)

  const clickHandler = async (event: any, usernameArg: string, passwordArg: string): Promise<any> => {
    event.preventDefault()
    const obj = {
      username: usernameArg,
      password: passwordArg
    }
    const data = await apis.signIn(obj)
    if (data !== undefined) {
      const { accessToken } = data;
      setAuthToken(accessToken)
      setLoggedIn(true);
      setErrorMessage(false)
    }
    else setErrorMessage(true) 
  };

  return (
    <div>
      <p>Login screen</p>
      <form>
        <input 
          type="text" 
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        ></input>
        <input 
          type="text" 
          placeholder="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
        <button onClick={ (e) => {
          clickHandler(e, username, password)
        }}>
        Sign In
        </button>
      </form>
      {errorMessage ? <p>Your password or username was incorrect</p> : null}
    </div>
  );
}
