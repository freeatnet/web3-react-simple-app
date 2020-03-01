import React from 'react';

import BlockNumber from './features/blocks';
import TokenInfo from './features/tokens';
import Web3ConnectionManager from './features/web3/Web3ConnectionManager';

import './App.css';

function App() {
  return (
    <Web3ConnectionManager>
      <div className="App">
        <BlockNumber />
        <TokenInfo address="0x6b175474e89094c44da98b954eedeac495271d0f" />
      </div>
    </Web3ConnectionManager>
  );
}

export default App;
