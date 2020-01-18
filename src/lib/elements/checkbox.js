import React from 'react'

const Checkbox = ({
  label,
  id,
  checked = false,
  disabled = false,
  ...additionalProps
}) => {
  return (
    <label
      className="spx-checkbox"
      htmlFor={id}
      {...additionalProps}
    >
      <input
        type="checkbox"
        name="checkbox"
        defaultChecked={checked}
        disabled={disabled}
        id={id}
      />
      <div className="spx-checkbox__box" data-icon="check"></div>
      <div className="spx-checkbox__material"></div>
      {label}
    </label>
  )
}

export default Checkbox
