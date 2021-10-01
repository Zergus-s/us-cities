import React from 'react';
import { NavLink } from 'react-router-dom';

export const Button = ({
  route = '',
  buttonText,
  styles,
  onClick = null,
  disabled,
  type,
}) => {
  return (
    <NavLink
      className={styles}
      to={route}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {buttonText}
    </NavLink>
  );
};
