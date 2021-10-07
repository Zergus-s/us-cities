import React from 'react';
import { useDispatch } from 'react-redux';

import usersSlice from '../../users-list/redux/usersSlice';
import { RoutePath } from '../../routing/Routes';
import { Button } from '../../shared/components/Button';

import styles from './NavBar.module.scss';

export default function NavBar({ isAuthorized }) {
  const dispatch = useDispatch();

  const handleResetAutorisation = () => {
    dispatch(usersSlice.actions.logOut());
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.banner}>US CITIES</div>
      <div>
        {!isAuthorized && (
          <>
            <Button
              styles={styles.navItem}
              route={RoutePath.USERS_LOGIN}
              buttonText={'LOGIN'}
            />
            <Button
              styles={styles.navItem}
              route={RoutePath.USERS_SIGN_UP}
              buttonText={'SIGN UP'}
            />
          </>
        )}

        {isAuthorized && (
          <>
            <Button
              styles={styles.navItem}
              route={RoutePath.CITIES}
              buttonText={'CITIES'}
            />
            <Button
              styles={styles.navItem}
              route={RoutePath.CITIES_ADMIN}
              buttonText={'ADMIN'}
            />
            <Button
              styles={styles.navItem}
              route={'sign_out'}
              buttonText={'SIGN OUT'}
              onClick={handleResetAutorisation}
            />
          </>
        )}
      </div>
    </nav>
  );
}
