import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

  //Entre parentesis porque voy a escribir JSX
  return (
    //React.Fragment va a reemplazar el uso del DIV retornando 1 solo elemento, para evitar esos DIV innecesarios
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
