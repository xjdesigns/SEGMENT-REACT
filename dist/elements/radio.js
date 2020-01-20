function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const Radio = ({
  label,
  name = 'radio',
  value = 'default',
  id,
  checked,
  disabled,
  ...additionalProps
}) => {
  return React.createElement("label", _extends({
    className: "spx-radio",
    htmlFor: id
  }, additionalProps), React.createElement("input", {
    type: "radio",
    name: name,
    id: id,
    disabled: disabled,
    defaultChecked: checked,
    value: value
  }), React.createElement("div", {
    className: "spx-radio__dot"
  }), label);
};

export default Radio;