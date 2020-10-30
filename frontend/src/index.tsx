import React from 'react';
import { StoreProvider } from 'easy-peasy';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/global.scss';

import AOS from 'aos';
import store from './store';

import 'aos/dist/aos.css';

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
