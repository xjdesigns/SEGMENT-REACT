import React from 'react'

const CodeSnippet = ({children}) => {
  return (
    <div className="sgr-code-snippet">
      <pre className="prettyprint">
        <code>
{children}
        </code>
      </pre>
    </div>
  )
}

export default CodeSnippet
