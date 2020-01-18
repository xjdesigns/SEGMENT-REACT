import React from 'react'

const Radio = ({
  label,
  name = 'radio',
  value = 'default',
  id,
  checked,
  disabled,
  ...additionalProps
}) => {
  return (
    <label
      className="spx-radio"
      htmlFor={id}
      {...additionalProps}
    >
      <input
        type="radio"
        name={name}
        id={id}
        disabled={disabled}
        defaultChecked={checked}
        value={value}
      />
      <div className="spx-radio__dot"></div>
      {label}
    </label>
  )
}

export default Radio
