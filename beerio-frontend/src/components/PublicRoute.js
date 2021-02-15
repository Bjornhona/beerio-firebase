import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { withAuth } from '../lib/authContext';

const PublicRoute = (props) => {
  const {isLogged} = props;

  return (
    <>
      {isLogged ? <Redirect to={'/home'} /> : <Route {...props}>{props.children}</Route>}
    </>
  );
}

export default withAuth(PublicRoute);
