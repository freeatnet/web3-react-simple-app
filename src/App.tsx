import React from 'react';

import Web3ConnectionManager from './features/web3/Web3ConnectionManager';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Web3ConnectionManager>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Web3ConnectionManager>
  );
}

export default App;
