function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const TextArea = ({
  label,
  id,
  defaultValue = '',
  hasError = false,
  cols = "30",
  rows = "10",
  ...additionalProps
}) => {
  const errorClass = hasError ? 'has-error' : '';
  return React.createElement(React.Fragment, null, React.createElement("label", {
    className: "spx-label",
    htmlFor: id
  }, label), React.createElement("textarea", _extends({
    className: `spx-textarea ${errorClass}`,
    id: id,
    cols: cols,
    rows: rows,
    defaultValue: defaultValue
  }, additionalProps)));
};

export default TextArea;