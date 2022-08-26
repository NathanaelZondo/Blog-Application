import * as React from "react";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import Blogs from '../src/components/Blogs'
import Posts from '../src/components/Posts'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);














export default function App() {



  return (
    <Authenticator signUpAttributes={[
      'address',
      'birthdate',
      'email',
      'family_name',
      'given_name',
      'locale',
      'middle_name',
      'name',
      'nickname',
      'phone_number',
      'picture',
      'preferred_username',
      'profile',
      'updated_at',
      'website',
      'zoneinfo',
    ]} socialProviders={['amazon', 'apple', 'facebook', 'google']}>
       
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
   
          <Route path="/Blogs">
            <Blogs />
          </Route>
          <Route path="/Posts">
            <Posts />
          </Route>
 
          <Route path="/">
            <Blogs />
          </Route>
        </Switch>
      </div>
    </Router>
     
    </Authenticator>

  );
}



