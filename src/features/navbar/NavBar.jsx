import React from 'react';

import styles from './NavBar.module.scss';
import { RoutePath } from '../routing/Routes';
import { Button } from '../shared/components/Button';

export default function NavBar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.banner}>US CITIES</div>
      <div>
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
      </div>
    </nav>
  );
}
