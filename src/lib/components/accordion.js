import React, { useState } from 'react'

const Accordion = ({
  title,
  secondary,
  isOpen = false,
  disabled = false,
  children,
  ...additionalProps
}) => {
  const [isopen, toggleOpen] = useState(isOpen)
  const openClass = isopen ? 'is-active' : ''

  return (
    <div className={`spx-ac ${openClass}`} {...additionalProps}>
      <div className="spx-ac__pane">
        <div className="spx-ac-title" data-id="accordionTitle">
          {title}
        </div>
        <div className="spx-ac-secondary" data-id="accordionSec">
          {secondary}
        </div>
        <div className="spx-ac-action">
          <button
            className="spx-btn"
            data-icon="keyboard_arrow_down"
            onClick={() => toggleOpen(!isopen)}
            disabled={disabled}
            data-id="AccordionToggleBtn"
          />
        </div>
      </div>
      <div className="spx-ac__content">
        {children}
      </div>
    </div>
  )
}

export default Accordion
