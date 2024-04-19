import React from 'react'
import SnippetToggle from '../helper/snippet-toggle'
import { Button } from '../lib'

const ExamplePage = () => {
  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button>Primary Button</Button>
        <Button inverted>Inverted Button</Button>

<SnippetToggle
  component={`
  import { Button } from 'segment_react'

  <Button>Primary Button</Button>
  <Button inverted>Inverted Button</Button>
  `}
  propList={`
  // Button Props
  children,
  variant = 'pr | sd', (optional)
  icon = false, (optional)
  material = false, (optional)
  circle = false, (optional)
  block = false, (optional)
  inverted = false, (optional)
  disabled = false, (optional)
  dataIcon, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>
    </>
  )
}

export default ExamplePage
