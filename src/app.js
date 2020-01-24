import React, { useState } from 'react'
import './docs.css'
import './prettyprint.css'
import Menu from './menu'
import Routing from './routing'
const isDev = process.env.NODE_ENV === 'development'
const initialRoute = isDev ? 'loading' : 'home'

const App = () => {
  const [route, setRoute] = useState(initialRoute)

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
