import React from 'react';

export default function FormInput({
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
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{text}</label>
      <input
        placeholder={placeholder}
        type={type}
        className="input"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values}
      />
      {touched && errors && <p className={styles.error}>{errors}</p>}
    </div>
  );
}
