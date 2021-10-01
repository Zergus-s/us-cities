import React from 'react';

import NavBar from './features/navbar/NavBar';
import Routes from './features/routing/Routes';

import styles from './App.module.scss';

function App() {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <Routes />
      </main>
    </>
  );
}

export default App;
