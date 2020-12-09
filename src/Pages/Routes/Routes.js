import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import Landing_page from '../Landing_page/Landing_page.js';
import Login from '../Login/Login.js';
import Register_org from '../Register_org/Register_org.js';
import Receive_survey from '../Receive_survey/Receive_survey.js';
import Create_survey from '../Create_survey/Create_survey.js';
import Groups from '../Groups/Groups.js';
import Homepage from '../Homepage/Homepage.js';
import Error_page from '../Error_page/Error_page.js';
import Test from '../Components/Test/Test.js';
import Survey_overlay from '../Survey_overlay/Survey_overlay.js';
import View_surveys from '../View_surveys/View_surveys.js';
import { propTypes } from 'react-bootstrap/esm/Image';



const Routes = (props) => {
  return (
    <>
        <Switch>
          <Route exact path="/" component={Landing_page} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register_org" component={Register_org} />
          <Route exact path="/receive_survey" component={Receive_survey} />
          <Route path="/create_survey/:id" component={Create_survey} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/homepage" >
            <Homepage uid={props.uid}/>
          </Route>
          <Route path="/survey_overlay" component={Survey_overlay} />
          <Route path="/view_survey" component={View_surveys} />
          <Route path="/testing" component={Test} />
          <Route component={Error_page} />
        </Switch>
    </>
  )
};

  export default Routes;
