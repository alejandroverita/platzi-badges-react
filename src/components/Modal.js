import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.css';

function Modal(props){

    if (!props.isOpen) {
        return null;
    }
    
    return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>
        {/* APRENDER DE COMPOSICION */}
        {props.children}
      </div>
    </div>, 
        document.getElementById('modal')
    ); /* create portal recibe 2 argumentos: el que y el donde renderizar */

}

export default Modal;