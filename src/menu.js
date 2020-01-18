import React from 'react'
import InnerMenu from './inner-menu'
import { ELEMENTS } from './routes/elements'

const Menu = ({ setRoute }) => {
  return (
    <div className="sgr-menu">
      <div className="sgr-menu__logo">
        SGR
      </div>
      <div className="sgr-menu__opt">
        <div className="sgr-menu-title" onClick={() => setRoute('home')}>
          Home
        </div>
      </div>
      <div className="sgr-menu__opt">
        <div className="sgr-menu-title" onClick={() => setRoute('base')}>
          Base
        </div>
      </div>

      <InnerMenu title="Elements" setRoute={setRoute} routes={ELEMENTS} />

      <div className="sgr-menu__opt">
        <div className="sgr-menu-title" onClick={() => setRoute('home')}>
          Segment CSS
        </div>
      </div>
    </div>
  )
}

export default Menu
