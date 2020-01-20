function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const Toggle = ({
  checked,
  disabled,
  ...additionalProps
}) => {
  const isDisabled = disabled ? 'spx-is-disabled' : '';
  return React.createElement("label", _extends({
    className: `spx-tgl ${isDisabled}`
  }, additionalProps), React.createElement("input", {
    className: "spx-tgl-input",
    type: "checkbox",
    defaultChecked: checked,
    disabled: disabled
  }), React.createElement("div", {
    className: "spx-tgl-btn"
  }));
};

export default Toggle;