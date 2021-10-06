import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import citiesSlice from '../../cities/redux/citiesSlice';
import useModal from '../../shared/hooks/useModal';
import styles from './AdminStyles.module.scss';

const CitiesAdmin = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState();
  const { cities } = useSelector((state) => state.cities);
  const { openModal, renderModal } = useModal();
  useEffect(() => {
    dispatch(citiesSlice.actions.fetchCities());
    dispatch(citiesSlice.actions.fetchStates());
  }, []);

  const handleDelete = (id) => {
    dispatch(citiesSlice.actions.deleteCity(id));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Admin</h1>
      <div onClick={openModal} className={styles.button}>
        CREATE NEW CITY
      </div>
      {cities.map((item) => (
        <div className={styles.container} key={item.id}>
          <div className={styles.name}>{item.name}</div>
          <div>
            <div
              onClick={() => {
                openModal();
                setCity(item);
              }}
              className={styles.button}
            >
              EDIT
            </div>
            <div
              onClick={() => handleDelete(item.id)}
              className={styles.button}
            >
              DELETE
            </div>
          </div>
        </div>
      ))}
      {renderModal(city)}
    </div>
  );
};
export default CitiesAdmin;
