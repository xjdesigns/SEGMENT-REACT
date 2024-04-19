import React from 'react'
import SnippetToggle from '../helper/snippet-toggle'
import { ActionPanel, Button } from '../lib'

const ActionPanelPage = () => {
  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Action Panel</h5>
      </div>

      <div className="sgr-cpage__display">
        <ActionPanel title="Action Panel" />

<SnippetToggle
  component={`
  import { ActionPanel } from 'segment_react'

  <ActionPanel title="Action Panel" />
  `}
  propList={`
  // Action Panel Props
  title, (required)
  baseAction, (optional)
  baseIcon = 'check', (optional)
  actions, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Action Panel/Base Action</h5>
      </div>

      <div className="sgr-cpage__display">
        <ActionPanel
          title="Action Panel"
          baseAction={() => {}}
          baseIcon="keyboard_arrow_down"
        />

<SnippetToggle
  component={`
  import { ActionPanel } from 'segment_react'

  <ActionPanel
    title="Action Panel"
    baseAction={() => {}}
    baseIcon="keyboard_arrow_down"
  />
  `}
  propList={`
  // Action Panel Props
  title, (required)
  baseAction, (optional)
  baseIcon = 'check', (optional)
  actions, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Action Panel/Actions</h5>
      </div>

      <div className="sgr-cpage__display">
        <ActionPanel
          title="Action Panel"
          actions={
            <div>
              <Button circle data-icon="check" size="sm" />
              <Button size="sm">Primary Button</Button>
            </div>
          }
        />

<SnippetToggle
  component={`
  import { ActionPanel } from 'segment_react'

  <ActionPanel
    title="Action Panel"
    actions={
      <div>
        <Button circle data-icon="check" size="sm" />
        <Button size="sm">Primary Button</Button>
      </div>
    }
  />
  `}
  propList={`
  // Action Panel Props
  title, (required)
  baseAction, (optional)
  baseIcon = 'check', (optional)
  actions, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>
    </>
  )
}

export default ActionPanelPage
