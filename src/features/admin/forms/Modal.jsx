import React from 'react';
import ReactDOM from 'react-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import Checkbox from './../../shared/components/Checkbox';
import Select from './../../shared/components/Select';

import FormInput from '../../shared/components/FormInput';

import styles from './Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import citiesSlice from '../../cities/redux/citiesSlice';

const modalNode = document.querySelector('#modal');

function Modal({ isOpen, onClose, inputs }) {
  const { states } = useSelector((state) => state.cities);
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    name: yup.string().required('Enter name'),
    state: yup.string().required('Choose state'),
    population: yup.number().positive().required('Enter Population'),
    imageURL: yup.string().url().required('Enter imageURL'),
  });
  if (!isOpen) return null;
  const backdropClickHandler = (e) => {
    if (e.target.id === 'modalBackdrop') onClose();
  };

  const submitCity = (data) => {
    data.stateId = states.find((item) => item.name === data.state).id;
    inputs
      ? dispatch(
          citiesSlice.actions.updateCity({ values: data, close: onClose })
        )
      : dispatch(
          citiesSlice.actions.createCity({ values: data, close: onClose })
        );
  };
  return ReactDOM.createPortal(
    <div
      id="modalBackdrop"
      className={styles.backDrop}
      onClick={backdropClickHandler}
    >
      <div className={styles.modal}>
        (
        <>
          <h1>Login</h1>

          <Formik
            initialValues={
              inputs
                ? {
                    name: inputs.name,
                    state: inputs.state.name,
                    population: inputs.population,
                    imageURL: inputs.imageUrl,
                    visited: inputs.visited,
                  }
                : {
                    name: '',
                    state: '',
                    population: '',
                    imageURL: '',
                    visited: '',
                  }
            }
            validateOnBlur
            onSubmit={(values) => submitCity(values)}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <div>
                <div className={styles.form}>
                  <div className={styles.modalHead}>CREATE CITY</div>
                  <FormInput
                    handleChange={handleChange}
                    name={'name'}
                    text={'Name'}
                    placeholder={'Enter Name'}
                    handleBlur={handleBlur}
                    values={values.name}
                    touched={touched.name}
                    errors={errors.name}
                    styles={styles}
                  />

                  <Select
                    states={states}
                    handleChange={handleChange}
                    name={'state'}
                    text={'State'}
                    type={'select'}
                    placeholder={'Select'}
                    handleBlur={handleBlur}
                    values={values.state}
                    touched={touched.state}
                    errors={errors.state}
                    styles={styles}
                  />

                  <FormInput
                    handleChange={handleChange}
                    name={'population'}
                    text={'Population'}
                    placeholder={'Enter Population'}
                    handleBlur={handleBlur}
                    values={values.population}
                    touched={touched.population}
                    errors={errors.population}
                    styles={styles}
                  />
                  <FormInput
                    handleChange={handleChange}
                    name={'imageURL'}
                    text={'Image URL'}
                    placeholder={' Image URL'}
                    handleBlur={handleBlur}
                    values={values.imageURL}
                    touched={touched.imageURL}
                    errors={errors.imageURL}
                    styles={styles}
                  />
                  <Checkbox
                    className={styles.checkbox}
                    type={'checkbox'}
                    handleChange={handleChange}
                    name={'visited'}
                    text={'Visited'}
                    handleBlur={handleBlur}
                    values={values.visited}
                    touched={touched.visited}
                    errors={errors.visited}
                    styles={styles}
                  />
                  <button
                    className={styles.button}
                    onClick={() => handleSubmit()}
                    disabled={!isValid && !dirty}
                    type={'submit'}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            )}
          </Formik>
        </>
        );
      </div>
    </div>,
    modalNode
  );
}

export default Modal;
