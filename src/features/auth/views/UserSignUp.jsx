import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button } from '../../shared/components/Button';
import styles from './FormStyle.module.scss';
import FormInput from '../../shared/components/FormInput';

export const UserSignUp = () => {
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
      .min(5),
    name: yup.string().required().min(1),
    imgURL: yup.string().required('Enter valid URL').url(),
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
            imgURL: '',
          }}
          validateOnBlur
          onSubmit={(values) => console.log('submit', values)}
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
                  name={'imgURL'}
                  text={'Image URL'}
                  placeholder={'Enter Image URL'}
                  handleBlur={handleBlur}
                  values={values.imgURL}
                  touched={touched.imgURL}
                  errors={errors.imgURL}
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
