import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import Landing_page from '../Landing_page/Landing_page.js';
import Login from '../Login/Login.js';
import Register_org from '../Register_org/Register_org.js';
import Re_survey from '../Receive_survey/Receive_survey.js';
import Cr_survey from '../Create_survey/Create_survey.js';
import Groups from '../Groups/Groups.js';
import Homepage from '../Homepage/Homepage.js';
import Error_page from '../Error_page/Error_page.js';
import Test from '../Components/Test/Test.js';



const Routes = () => {
  return (
    <>
        <Switch>
          <Route exact path="/" component={Landing_page} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register_org" component={Register_org} />
          <Route exact path="/re_survey" component={Re_survey} />
          <Route exact path="/cr_survey" component={Cr_survey} />
          <Route exact path="/groups" component={Groups} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/testing" component={Test} />
          <Route component={Error_page} />
        </Switch>
    </>
  )
};

  export default Routes;
