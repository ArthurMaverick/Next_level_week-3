import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './pages/landing'
import OrfanatoMap from './pages/OrfanatoMap'

function Routes () {
  return (
    <BrowserRouter>
   <Switch>

    <Route path='/' exact component={Landing}/>
    <Route path='/app' component={OrfanatoMap}/>
    
   </Switch>
    </BrowserRouter>
  );
}

export default Routes