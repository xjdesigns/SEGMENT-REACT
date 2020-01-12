import React from 'react'
import './docs.css'
import './prettyprint.css'
import { ButtonPage } from './pages'

// TODO: create routing for pages
const App = () => {
  return (
    <div className="sgr-core">
      <div className="sgr-core-menu">
        Menu
      </div>

      <div className="sgr-core-page">
        <ButtonPage />
      </div>
    </div>
  )
}

export default App
