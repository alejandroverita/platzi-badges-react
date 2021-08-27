import React from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';

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
        {/* switch va a tomar la direccion que esta en el navegador y a renderizar 1 ruta. La primera que coincida con esa direccion */}
        <Switch>
          {/* especificar que la ruta es EXACTA para que no confunda badges y badgesNew */}
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path= "/rickandmorty" component={Rickandmorty} />
          <Route path="/404" component={NotFound} />
          <Redirect from = "*" to ="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
