import React, { useState } from 'react'
import CodeSnippet from './code-snippet'

const SnippetToggle = ({component, propList}) => {
  const [which, toggleDis] = useState('comp')

  return (
    <div className="sgr-snpt-tgl">
      <div className="sgr-snpt-tgl__toggles">
        <button
          className={`${which === 'comp' ? 'is-active' : ''}`}
          onClick={() => toggleDis('comp')}
        >Component</button>
        <button
          className={`${which === 'props' ? 'is-active' : ''}`}
          onClick={() => toggleDis('props')}
        >Props</button>
      </div>

      {which === 'comp' ? (
        <div className="sgr-snpt-tgl__comp">
          <CodeSnippet>
            {component}
          </CodeSnippet>
        </div>
      ) : (
        <div className="sgr-snpt-tgl__props">
          <CodeSnippet>
            {propList}
          </CodeSnippet>
        </div>
      )}
    </div>
  )
}

export default SnippetToggle
