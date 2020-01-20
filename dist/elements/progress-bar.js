function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const ProgressBar = ({
  progress = '0',
  title,
  ...additionalProps
}) => {
  const barProg = {
    width: `${progress}%`
  };
  const hasTitle = title ? 'spx-progress--title' : '';
  return React.createElement("div", _extends({
    className: `spx-progress ${hasTitle}`,
    "data-title": progress
  }, additionalProps), React.createElement("div", {
    style: barProg
  }));
};

export default ProgressBar;