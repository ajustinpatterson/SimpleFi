import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RouteProps } from "react-router";
import simpleFiSplash from '../../assets/images/simpleFi-splash3.svg';
import './Welcome.css';
import Footer from '../Footer/Footer';

interface WelcomeProps {
  connect: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Welcome ({ connect }: WelcomeProps) {

  const br = '\n';

  return (
    <>
    <div className='welcome'>
      <div className='welcome-splash'>
        <div className="splash-text">
          <h1>SimpleFi</h1>
          <h2>Decentralised finance investing made easy!</h2>
        </div>
        <div className="splash-connect">
          <Link to='/dashboard'>
            <button className='welcome-button' onClick={connect}>Connect wallet</button>
          </Link>
        </div>
      </div>
      <div className="welcome-media">
        <img src={simpleFiSplash} alt="Welcome to SimpleFi" className="welcome-media-image"/>
      </div>
    </div>
    <Footer/>
    </>
  )
}