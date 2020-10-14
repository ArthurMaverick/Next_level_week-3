import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './pages/landing'
import OrfanatoMap from './pages/OrfanatoMap'
import Orfanato from './pages/Orphanage'
import CreateOrfanato from './pages/CreateOrphanage'

function Routes () {
  return (
    <BrowserRouter>
   <Switch>

    <Route path='/' exact component={Landing}/>
    <Route path='/app' component={OrfanatoMap}/>

    <Route path='/orfanatos/create' component={CreateOrfanato}/>
    <Route path='/orfanatos/:id' component={Orfanato}/>
    
   </Switch>
    </BrowserRouter>
  );
}

export default Routes