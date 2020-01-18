import React from 'react'

const Toggle = ({
  checked,
  disabled,
  ...additionalProps
}) => {
  const isDisabled = disabled ? 'spx-is-disabled' : ''

  return (
    <label
      className={`spx-tgl ${isDisabled}`}
      {...additionalProps}
    >
      <input
        className="spx-tgl-input"
        type="checkbox"
        defaultChecked={checked}
        disabled={disabled}
      />
      <div className="spx-tgl-btn" />
    </label>
  )
}

export default Toggle
