import React from 'react';

const Button = ({
  children,
  variant = 'pr',
  icon = false,
  material = false,
  circle = false,
  block = false
}) => {
  return React.createElement("button", {
    className: `spx-btn spx-btn--${variant}`
  }, children);
};

export default Button;