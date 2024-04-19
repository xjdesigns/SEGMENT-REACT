import React, { useState } from 'react'

const InnerMenu = ({ title, setRoute, routes }) => {
  const [isopen, toggleOpen] = useState(false)

  return (
    <div className="sgr-menu__opt">
      <div className="sgr-menu-title" onClick={() => toggleOpen(!isopen)}>
        {routes.title}
      </div>

      {routes && (
        <div className={`sgr-menu-list ${isopen ? 'is-open' : ''}`}>
          <ul>
            {routes.components.map((r, idx) => {
              return (
                <li key={idx} onClick={() => setRoute(r.route)}>
                  {r.title}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default InnerMenu
