import React from 'react';

export default function Select({
  handleChange,
  name,
  text,
  handleBlur,
  values,
  touched,
  errors,
  styles,
  placeholder,
  states,
}) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{text}</label>
      <select
        placeholder={placeholder}
        name={name}
        id={name}
        onBlur={handleBlur}
        onChange={handleChange}
        className={styles.formControl}
        value={values}
      >
        <option value="" />
        {states.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
      {touched && errors && <p className={styles.error}>{errors}</p>}
    </div>
  );
}
