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
}) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        placeholder={placeholder}
        type="text"
        className="input"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values}
      />
      {touched && errors && <p className={styles}>{errors}</p>}
    </div>
  );
}
