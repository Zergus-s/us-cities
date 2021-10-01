import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button } from '../../shared/components/Button';
import styles from './FormStyle.module.scss';
import FormInput from '../../shared/components/FormInput';

export const UserLogin = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Must be valid email')
      .required('Enter valid email'),
    password: yup.string().required('Enter password').min(5),
  });

  return (
    <div style={{ margin: 'auto' }}>
      <h1>Login</h1>
      <div className={styles.form}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validateOnBlur
          onSubmit={(values) => console.log('submit', values)}
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
                />
                <Button
                  styles={styles.navItem}
                  onClick={handleSubmit}
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
