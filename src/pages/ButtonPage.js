import React from 'react'
import CodeSnippet from '../helper/code-snippet'
import { Button } from '../lib'

const ButtonPage = () => {
  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button>Primary Button</Button>
        <Button inverted>Inverted Button</Button>

<CodeSnippet>
  {`
  <Button>Primary Button</Button>
  <Button inverted>Inverted Button</Button>
  `}
</CodeSnippet>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Disabled</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button disabled>Primary Disabled</Button>

        <div className="sgr-code-snippet">
          <pre className="prettyprint">
            <code>
              &lt;Button disabled>Primary Button&lt;/Button>
            </code>
          </pre>
        </div>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Icon</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button icon dataIcon="check">Primary w/ Icon</Button>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Material</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button material icon dataIcon="check">Primary Material</Button>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Block</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button block icon dataIcon="check">Primary Block</Button>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Circle Icon only</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button circle dataIcon="check" />
      </div>
    </div>
    </>
  )
}

export default ButtonPage
