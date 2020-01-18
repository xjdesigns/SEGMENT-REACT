import React from 'react'
import SnippetToggle from '../helper/snippet-toggle'
import { Toggle } from '../lib'

const TogglePage = () => {
  const handlechange = ev => {
    console.warn('change ev', ev.target.checked)
  }

  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Toggle</h5>
      </div>

      <div className="sgr-cpage__display">
        <Toggle />

<SnippetToggle
  component={`
  import { Toggle } from 'segment_react'

  <Toggle />
  `}
  propList={`
  // Toggle Props
  checked, (optional)
  disabled, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Toggle/Checked</h5>
      </div>

      <div className="sgr-cpage__display">
        <Toggle checked />

<SnippetToggle
  component={`
  import { Toggle } from 'segment_react'

  <Toggle checked />
  `}
  propList={`
  // Toggle Props
  checked, (optional)
  disabled, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Toggle/Handler</h5>
      </div>

      <div className="sgr-cpage__display">
        <Toggle onChange={handlechange} />

<SnippetToggle
  component={`
  import { Toggle } from 'segment_react'

  <Toggle onChange={handlechange} />
  // NOTE: Additional props passes handlers, use whichever method you pefer
  // Open the console and see the (event.target.checked) value
  `}
  propList={`
  // Toggle Props
  checked, (optional)
  disabled, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Toggle/Disabled</h5>
      </div>

      <div className="sgr-cpage__display">
        <Toggle disabled />

<SnippetToggle
  component={`
  import { Toggle } from 'segment_react'

  <Toggle disabled />
  `}
  propList={`
  // Toggle Props
  checked, (optional)
  disabled, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>
    </>
  )
}

export default TogglePage
