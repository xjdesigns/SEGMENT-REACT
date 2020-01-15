import React from 'react'

const Form = ({children, ...additionalProps}) => {
  return (
    <form
      className="spx-form"
      {...additionalProps}
    >
      {children}
    </form>
  )
}

export default Form
