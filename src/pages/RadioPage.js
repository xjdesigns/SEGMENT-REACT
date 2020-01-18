import React from 'react'
import SnippetToggle from '../helper/snippet-toggle'
import { Radio } from '../lib'

const RadioPage = () => {
  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Radio</h5>
      </div>

      <div className="sgr-cpage__display">
        <Radio label="One" name="radio-select" value="One" />
        <Radio label="Two" name="radio-select" value="Two" />
        <Radio label="Three" name="radio-select" value="Three" />

<SnippetToggle
  component={`
  import { Radio } from 'segment_react'

  <Radio label="One" name="radio-select" value="One" />
  `}
  propList={`
  // Radio Props
  label, (required)
  name = 'radio', (required)
  value = 'default', (required)
  id, (required)
  checked, (optional)
  disabled, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Radio/Checked</h5>
      </div>

      <div className="sgr-cpage__display">
        <Radio label="One" name="radio-checked" value="One" checked />

<SnippetToggle
  component={`
  import { Radio } from 'segment_react'

  <Radio label="One" name="radio-checked" value="One" checked />
  `}
  propList={`
  // Radio Props
  label, (required)
  name = 'radio', (required)
  value = 'default', (required)
  id, (required)
  checked, (optional)
  disabled, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Radio/Disabled</h5>
      </div>

      <div className="sgr-cpage__display">
        <Radio label="One" name="radio-checked" value="One" disabled />

<SnippetToggle
  component={`
  import { Radio } from 'segment_react'

  <Radio ... disabled />
  `}
  propList={`
  // Radio Props
  label, (required)
  name = 'radio', (required)
  value = 'default', (required)
  id, (required)
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

export default RadioPage
