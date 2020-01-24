import React from 'react'

const Loading = ({ ...additionalProps }) => {
  return (
    <div className="spx-loading" {...additionalProps}>
      <div className="spx-loading__dots" />
      <div className="spx-loading__dots" />
      <div className="spx-loading__dots" />
    </div>
  )
}

export default Loading
