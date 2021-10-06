import React from 'react';
import { useSelector } from 'react-redux';

import NavBar from './features/navbar/views/NavBar';
import Routes from './features/routing/Routes';

import styles from './App.module.scss';

function App() {
  const { token } = useSelector((state) => state.users.authData);

  return (
    <>
      <header className={styles.header}>
        <NavBar isAuthorized={!!token} />
      </header>
      <main className={styles.main}>
        <Routes isAuthorized={!!token} />
      </main>
    </>
  );
}

export default App;
