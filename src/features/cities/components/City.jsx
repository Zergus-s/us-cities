import React from 'react';
import { useDispatch } from 'react-redux';

import citiesSlice from '../redux/citiesSlice';

import styles from './cityStyle.module.scss';

export default function City({ item }) {
  const dispatch = useDispatch();

  const handleClickVisited = (item) => {
    const city = { ...item };
    city.visited = true;
    dispatch(citiesSlice.actions.updateCityStatus(item));
  };

  return (
    <div className={styles.userWrapper}>
      <div className={styles.thumb}>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
        <span>
          State:
          <span className={styles.state}>{item.state.name}</span>
        </span>
        <span>
          Population:{' '}
          <span className={styles.population}>
            {item.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </span>
      </div>
      <div
        className={
          !item.visited
            ? styles.button
            : `${styles.button} ${styles.hiddenButton}`
        }
        disabled={false}
        onClick={() => handleClickVisited(item)}
      >
        {item.visited ? 'VISITED' : 'MAKE VISITED'}
      </div>
    </div>
  );
}
