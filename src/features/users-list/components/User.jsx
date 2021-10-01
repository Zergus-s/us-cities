import React from 'react';

import styles from './UserStyle.module.scss';

function User({ item }) {
  return (
    <div className={styles.userWrapper}>
      <div className={styles.thumb}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
        <span>
          Cities visited:
          <span className={styles.visited}>{item.citiesVisited}</span>
        </span>
        <span>
          Cities total: <span className={styles.total}>{item.citiesTotal}</span>
        </span>
      </div>
    </div>
  );
}

export default User;
