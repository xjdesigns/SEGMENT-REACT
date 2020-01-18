import React from 'react'
import SnippetToggle from '../helper/snippet-toggle'
import { Checkbox } from '../lib'

const CheckboxPage = () => {
  const changehandler = ev => {
    console.warn('Checkbox change event', ev.target.checked)
  }

  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Checkbox</h5>
      </div>

      <div className="sgr-cpage__display">
        <Checkbox label="I am checkbox" id="Check01" checked />

<SnippetToggle
  component={`
  import { Checkbox } from 'segment_react'

  <Checkbox label="I am checkbox" id="Check01" checked />
  `}
  propList={`
  // Checkbox Props
  label, (required)
  id, (required)
  checked = false, (optional)
  disabled = false, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Checkbox/Disabled</h5>
      </div>

      <div className="sgr-cpage__display">
        <Checkbox label="I am checkbox" id="Check01" disabled />

<SnippetToggle
  component={`
  import { Checkbox } from 'segment_react'

  <Checkbox label="I am checkbox" id="Check01" disabled />
  `}
  propList={`
  // Checkbox Props
  label, (required)
  id, (required)
  checked = false, (optional)
  disabled = false, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Checkbox/Handler</h5>
      </div>

      <div className="sgr-cpage__display">
        <Checkbox label="I am checkbox" id="Check03" onChange={changehandler} />

<SnippetToggle
  component={`
  import { Checkbox } from 'segment_react'

  <Checkbox ... onChange={function} />

  // NOTE: Additional props passes handlers, use whichever method you pefer
  // Open the console and see the (event.target.checked) value
  `}
  propList={`
  // Checkbox Props
  label, (required)
  id, (required)
  checked = false, (optional)
  disabled = false, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>
    </>
  )
}

export default CheckboxPage
