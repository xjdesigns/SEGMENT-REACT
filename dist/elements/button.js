function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const Button = ({
  children,
  variant = 'pr',
  icon = false,
  material = false,
  circle = false,
  block = false,
  inverted = false,
  disabled = false,
  dataIcon,
  ...additionalProps
}) => {
  const base = 'spx-btn';
  const isIcon = icon ? `${base}--icon` : '';
  const isMaterial = material ? `${base}--material` : '';
  const isCircle = circle ? `${base}--circle` : '';
  const isBlock = block ? `${base}--block` : '';
  const isInverted = inverted ? `${base}--${variant}--inverted` : '';
  return React.createElement("button", _extends({
    className: `
        spx-btn spx-btn--${variant}
        ${isInverted}
        ${isIcon}
        ${isMaterial}
        ${isCircle}
        ${isBlock}
      `,
    "data-icon": dataIcon,
    disabled: disabled
  }, additionalProps), children);
};

export default Button;