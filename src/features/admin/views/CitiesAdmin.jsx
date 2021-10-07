import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import citiesSlice from '../../cities/redux/citiesSlice';
import useModal from '../../shared/hooks/useModal';
import Modal from '../components/Modal';

import styles from './AdminStyles.module.scss';

export const CitiesAdmin = () => {
  const { cities } = useSelector((state) => state.cities);
  const { openModal, renderModal } = useModal();
  const [city, setCity] = useState();
  const [option, setOption] = useState('create');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(citiesSlice.actions.fetchCities());
    dispatch(citiesSlice.actions.fetchStates());
  }, []);

  const handleDelete = (id) => {
    dispatch(citiesSlice.actions.deleteCity(id));
  };

  const handleCreate = () => {
    setCity();
    openModal();
    setOption('create');
  };

  const handleEdit = (item) => {
    setOption('edit');
    setCity(item);
    openModal();
  };

  return (
    <div className={styles.wrapper}>
      <h1>Admin</h1>
      <div onClick={handleCreate} className={styles.button}>
        CREATE NEW CITY
      </div>
      {cities.map((item) => (
        <div className={styles.container} key={item.id}>
          <div className={styles.name}>{item.name}</div>
          <div>
            <div onClick={() => handleEdit(item)} className={styles.button}>
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
      {renderModal(Modal, city, option)}
    </div>
  );
};
