import React from 'react'

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
  const base = 'spx-btn'
  const isIcon = icon ? `${base}--icon` : ''
  const isMaterial = material ? `${base}--material` : ''
  const isCircle = circle ? `${base}--circle` : ''
  const isBlock = block ? `${base}--block` : ''
  const isInverted = inverted ? `${base}--${variant}--inverted` : ''

  return (
    <button
      className={`
        spx-btn spx-btn--${variant}
        ${isInverted}
        ${isIcon}
        ${isMaterial}
        ${isCircle}
        ${isBlock}
      `}
      data-icon={dataIcon}
      disabled={disabled}
      {...additionalProps}
    >
      {children}
    </button>
  )
}

export default Button
