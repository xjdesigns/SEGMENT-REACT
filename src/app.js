import React, { useState } from 'react'
import './docs.css'
import './prettyprint.css'
import Menu from './menu'
import Routing from './routing'

const App = () => {
  const [route, setRoute] = useState('actionpanel')

  return (
    <div className="sgr-core">
      <Menu setRoute={setRoute} />

      <div className="sgr-core-page">
        <Routing route={route} />
      </div>
    </div>
  )
}

export default App
