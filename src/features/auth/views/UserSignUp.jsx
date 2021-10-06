import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { Button } from '../../shared/components/Button';
import FormInput from '../../shared/components/FormInput';
import { RoutePath } from '../../routing/Routes';
import usersSlice from '../../users-list/redux/usersSlice';

import styles from './FormStyle.module.scss';
export const UserSignUp = () => {
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Enter valid email'),
    password: yup.string().required('Enter password').min(5),
    confirmPassword: yup
      .string()
      .when('password', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref('password')], 'Both password need to be the same'),
      })
      .required('Enter password confirmation'),
    name: yup.string().required().min(1),
    imageUrl: yup.string().required('Enter valid URL').url(),
  });

  return (
    <div style={{ margin: 'auto' }}>
      <h1>Sign Up</h1>
      <div className={styles.form}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            imageUrl: '',
          }}
          validateOnBlur
          onSubmit={(values) => dispatch(usersSlice.actions.signUp(values))}
          validationSchema={validationSchema}
          values
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
                <FormInput
                  handleChange={handleChange}
                  name={'email'}
                  text={'Email'}
                  placeholder={'Enter Email'}
                  handleBlur={handleBlur}
                  values={values.email}
                  touched={touched.email}
                  errors={errors.email}
                  styles={styles.error}
                />
                <FormInput
                  handleChange={handleChange}
                  name={'password'}
                  text={'Password'}
                  placeholder={'Enter Password'}
                  handleBlur={handleBlur}
                  values={values.password}
                  touched={touched.password}
                  errors={errors.password}
                  styles={styles.error}
                  type={'password'}
                />
                <FormInput
                  handleChange={handleChange}
                  name={'confirmPassword'}
                  text={'Confirm Password'}
                  placeholder={'Enter Password'}
                  handleBlur={handleBlur}
                  values={values.confirmPassword}
                  touched={touched.confirmPassword}
                  errors={errors.confirmPassword}
                  styles={styles.error}
                  type={'password'}
                />
                <FormInput
                  handleChange={handleChange}
                  name={'name'}
                  text={'Name'}
                  placeholder={'Enter Name'}
                  handleBlur={handleBlur}
                  values={values.name}
                  touched={touched.name}
                  errors={errors.name}
                  styles={styles.error}
                />
                <FormInput
                  handleChange={handleChange}
                  name={'imageUrl'}
                  text={'Image URL'}
                  placeholder={'Enter Image URL'}
                  handleBlur={handleBlur}
                  values={values.imageUrl}
                  touched={touched.imageUrl}
                  errors={errors.imageUrl}
                  styles={styles.error}
                />
                <Button
                  route={RoutePath.CITIES}
                  styles={styles.navItem}
                  onClick={() => handleSubmit()}
                  buttonText={'SUBMIT'}
                  disabled={!isValid && !dirty}
                  type={'submit'}
                />
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
