import React from 'react'
import SnippetToggle from '../helper/snippet-toggle'
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

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Icon</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button icon dataIcon="check">Primary w/ Icon</Button>

<SnippetToggle
  component={`
  import { Button } from 'segment_react'

  <Button icon dataIcon="check">Primary w/ Icon</Button>
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

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Block</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button block>Primary Block</Button>

<SnippetToggle
  component={`
  import { Button } from 'segment_react'

  <Button block>Primary Block</Button>
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

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Button Circle</h5>
      </div>

      <div className="sgr-cpage__display">
        <Button circle data-icon="check" />

<SnippetToggle
  component={`
  import { Button } from 'segment_react'

  <Button circle data-icon="check" />
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

export default ButtonPage
