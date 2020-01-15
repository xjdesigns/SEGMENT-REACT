import React from 'react'
import './docs.css'
import './prettyprint.css'
import Menu from './menu'
import {
  ButtonPage,
  FormPage,
} from './pages'

// TODO: create routing for pages
const App = () => {
  return (
    <div className="sgr-core">
      <Menu />

      <div className="sgr-core-page">
        {/* <ButtonPage /> */}
        <FormPage />
      </div>
    </div>
  )
}

export default App
