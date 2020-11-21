import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import Landing_page from '../Landing_page/Landing_page.js';
import Login from '../Login/Login.js';
import Register_org from '../Register_org/Register_org.js';

const Routes = () => {
  return (
    <>
        <Switch>
          <Route exact path="/" component={Landing_page} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register_org" component={Register_org} />
        </Switch>
    </>
  )
};

  export default Routes;
