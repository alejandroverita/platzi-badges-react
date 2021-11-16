import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';
import Rickandmorty from '../pages/Rickandmorty';


function App() {
  return (
    //react-router-dom. BrowserRouter solo puede tener 1 hijo
    <BrowserRouter>
      <Layout>
        {/* Routes va a tomar la direccion que esta en el navegador y a renderizar 1 ruta. La primera que coincida con esa direccion */}
        <Routes>
          {/* especificar que la ruta es EXACTA para que no confunda badges y badgesNew */}
          <Route exact path="platzi-badges-react" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path= "/rickandmorty" component={Rickandmorty} />
          <Route path="*" component={NotFound} />
          {/* <Redirect from = "*" to ="/platzi-badges-react/404" /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
