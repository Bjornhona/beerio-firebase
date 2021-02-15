import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { withAuth } from '../lib/authContext';

const PrivateRoute = (props) => {
  const {isLogged} = props;

  return (
    <>
      {isLogged ? <Route {...props}>{props.children}</Route> : <Redirect to={'/login'} />}
    </>
  );
}

export default withAuth(PrivateRoute);