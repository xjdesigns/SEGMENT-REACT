function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Button from './button';

const Input = ({
  label,
  id,
  type = 'text',
  defaultValue = '',
  hasError = false,
  searchAction,
  ...additionalProps
}) => {
  const errorClass = hasError ? 'has-error' : '';
  return React.createElement(React.Fragment, null, React.createElement("label", {
    className: "spx-label",
    htmlFor: id
  }, label), type === 'search' ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: "spx-search"
  }, React.createElement("input", _extends({
    className: `spx-input ${errorClass}`,
    type: type,
    id: id,
    defaultValue: defaultValue
  }, additionalProps)), React.createElement(Button, {
    circle: true,
    dataIcon: "search",
    type: "button",
    onClick: searchAction
  }))) : React.createElement("input", _extends({
    className: `spx-input ${errorClass}`,
    type: type,
    id: id,
    defaultValue: defaultValue
  }, additionalProps)));
};

export default Input;