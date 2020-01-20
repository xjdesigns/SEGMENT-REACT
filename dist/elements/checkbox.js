function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const Checkbox = ({
  label,
  id,
  checked = false,
  disabled = false,
  ...additionalProps
}) => {
  return React.createElement("label", _extends({
    className: "spx-checkbox",
    htmlFor: id
  }, additionalProps), React.createElement("input", {
    type: "checkbox",
    name: "checkbox",
    defaultChecked: checked,
    disabled: disabled,
    id: id
  }), React.createElement("div", {
    className: "spx-checkbox__box",
    "data-icon": "check"
  }), React.createElement("div", {
    className: "spx-checkbox__material"
  }), label);
};

export default Checkbox;