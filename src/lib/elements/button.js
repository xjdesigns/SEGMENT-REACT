import React from 'react'

const Button = ({
  children,
  variant = 'pr',
  icon = false,
  material = false,
  circle = false,
  block = false,
}) => {

  return (
    <button className={`spx-btn spx-btn--${variant}`}>
      {children}
    </button>
  )
}

export default Button
