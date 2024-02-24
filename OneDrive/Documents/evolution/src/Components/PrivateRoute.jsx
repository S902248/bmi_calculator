function PrivateRoute() {}

export default PrivateRoute;


// PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authState } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        authState.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
