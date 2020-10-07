import React, { SetStateAction } from 'react';

interface LoginProps {
  setLoggedIn: (arg0: boolean) => void;
}

export default function Login({ setLoggedIn }: LoginProps): JSX.Element {
  const clickHandler = (): void => {
    setLoggedIn(true);
  };
  return (
    <div>
      <p>Login screen</p>
      <form>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="password"></input>
        <button onClick={clickHandler}>Sign In</button>
      </form>
    </div>
  );
}
