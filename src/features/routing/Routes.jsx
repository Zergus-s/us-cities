import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { UserLogin } from '../auth/views/UserLogin';
import { UserSignUp } from '../auth/views/UserSignUp';
import Cities from '../cities/views/Cities';
import CitiesAdmin from '../cities/views/CitiesAdmin';
import UsersList from '../users-list/views/UsersList';

export const RoutePath = {
  USERS: '/users',
  USERS_LOGIN: '/users/login',
  USERS_SIGN_UP: '/users/signup',
  CITIES: '/cities',
  CITIES_ADMIN: '/cities/admin',
};

function Routes() {
  return (
    <Switch>
      <Route path={RoutePath.USERS_LOGIN} component={UserLogin} />
      <Route path={RoutePath.USERS_SIGN_UP} component={UserSignUp} />
      <Route path={RoutePath.CITIES_ADMIN} component={CitiesAdmin} />
      <Route path={RoutePath.CITIES} component={Cities} />
      <Route path={RoutePath.USERS} component={UsersList} />
      <Redirect to={RoutePath.USERS} />
    </Switch>
  );
}

export default Routes;
