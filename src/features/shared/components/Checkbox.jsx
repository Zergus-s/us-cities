import React from 'react';

export default function Checkbox({
  handleChange,
  name,
  text,
  handleBlur,
  values,
  touched,
  errors,
  styles,
  placeholder,
  type = 'text',
}) {
  return (
    <div className={styles.checkbox}>
      <input
        placeholder={placeholder}
        type={type}
        className={styles.checkboxInput}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        checked={values}
      />
      <label htmlFor={name}>{text}</label>
      {touched && errors && <p className={styles.error}>{errors}</p>}
    </div>
  );
}
