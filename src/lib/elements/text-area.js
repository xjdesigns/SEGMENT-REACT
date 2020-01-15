import React from 'react'

const TextArea = ({
  label,
  id,
  defaultValue = '',
  hasError = false,
  cols = "30",
  rows = "10",
  ...additionalProps
}) => {
  const errorClass = hasError ? 'has-error' : ''

  return (
    <>
      <label className="spx-label" htmlFor={id}>{label}</label>
      <textarea
        className={`spx-textarea ${errorClass}`}
        id={id}
        cols={cols}
        rows={rows}
        defaultValue={defaultValue}
        {...additionalProps}
      />
    </>
  )
}

export default TextArea
