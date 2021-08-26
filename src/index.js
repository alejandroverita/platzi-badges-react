import React from 'react';
import ReactDOM from 'react-dom';

//Otra forma de agregar estilos es con Bootstrap. Traerlo con npm
import 'bootstrap/dist/css/bootstrap.css';

// pquenos cambios de estilos sobre bootstrap 
import './global.css'; 


import App from './components/App';

const container = document.getElementById('app');

//ReactDom.render(__que__, __donde__) es el analogo a appendChild(); Hay que darle un ELEMENTO
ReactDOM.render(< App />, container);
