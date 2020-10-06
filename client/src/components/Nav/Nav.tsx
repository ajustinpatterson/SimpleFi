import React from 'react';
import './Nav.css';

interface NavProps {
  connect: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  splash: boolean;
}

export default function Nav ({connect, splash} : NavProps): JSX.Element {
  return (
    <nav>
      <div className="nav-title">{splash ? 'SimpleFi' : ""}</div>
      <div className="nav-items">
        <div className="nav-links">
          <div className="menu-items">About</div>
          <div className="menu-items">What is DeFi</div>
        </div>
          <div className={`nav-button${!splash ? '-transp' : ''}`}>
            <button onClick={connect}>Connect wallet</button>
          </div>
      </div>
    </nav>
  )
}
