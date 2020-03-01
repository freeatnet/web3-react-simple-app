import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WrappedWeb3ReactProvider from './features/web3/WrappedWeb3ReactProvider';

ReactDOM.render(
  <WrappedWeb3ReactProvider>
    <App />
  </WrappedWeb3ReactProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
