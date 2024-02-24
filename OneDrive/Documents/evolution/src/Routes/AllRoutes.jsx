function AllRoutes() {
  return (
    <div>

    </div>
  );
}

// export default AllRoutes;


// AllRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { SingleProductPage } from '../pages/SingleProductPage';

const AllRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/products/:id" component={SingleProductPage} />
      </Switch>
    </Router>
  );
};

export default AllRoutes;
