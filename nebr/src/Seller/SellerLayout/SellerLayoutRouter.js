import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const SellerLayoutRouter = ({component: Component, ...rest}) => {
  return (
      <Route {...rest} render={props => (
          true ?
              <Component {...props} />
          : <Redirect to="/login" />
      )} />
  );
};

export default SellerLayoutRouter;