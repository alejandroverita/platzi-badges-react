import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

//ReactDom.render(__que__, __donde__) es el analogo a appendChild();
ReactDOM.render(<App />, container);
