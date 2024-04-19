import React, { useEffect } from 'react'

const CodeSnippet = ({children}) => {
  useEffect(() => {
    window.PR.prettyPrint()
  })

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
