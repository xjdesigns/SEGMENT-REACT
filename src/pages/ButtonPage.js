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

<CodeSnippet>
  {`
  <Button disabled>Primary Disabled</Button>
  `}
</CodeSnippet>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Icon</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button icon dataIcon="check">Primary w/ Icon</Button>

<CodeSnippet>
  {`
  <Button icon dataIcon="check">Primary w/ Icon</Button>
  `}
</CodeSnippet>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Material</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button material icon dataIcon="check">Primary Material</Button>

<CodeSnippet>
  {`
  <Button material icon dataIcon="check">Primary Material</Button>
  `}
</CodeSnippet>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Block</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button block>Primary Block</Button>

<CodeSnippet>
  {`
  <Button block>Primary Block</Button>
  `}
</CodeSnippet>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Circle Icon only</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button circle dataIcon="check" />

<CodeSnippet>
  {`
  <Button circle dataIcon="check" />
  `}
</CodeSnippet>
      </div>
    </div>
    </>
  )
}

export default ButtonPage
