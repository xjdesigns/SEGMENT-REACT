import React from 'react'
import SnippetToggle from '../helper/snippet-toggle'
import { Accordion, Button } from '../lib'

const AccordionPage = () => {
  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Accordion</h5>
      </div>

      <div className="sgr-cpage__display">
        <Accordion title="Accordion title">
          Inner content
        </Accordion>

<SnippetToggle
  component={`
  import { Accordion } from 'segment_react'

  <Accordion title="Accordion title">
    Inner content
  </Accordion>
  `}
  propList={`
  // Accordion Props
  title, (required)
  secondary, (optional)
  isOpen = false, (optional)
  disabled = false, (optional)
  children, (required)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Accordion/Secondary</h5>
      </div>

      <div className="sgr-cpage__display">
        <Accordion
          title="Accordion title"
          secondary={
            <div><Button size="sm">btn</Button>I can be elements or just text</div>
          }
        >
          Inner content
        </Accordion>

<SnippetToggle
  component={`
  import { Accordion } from 'segment_react'

  <Accordion
    title="Accordion title"
    secondary={<div>I can be elements or just text</div>}
  >
    ...
  </Accordion>
  `}
  propList={`
  // Accordion Props
  title, (required)
  secondary, (optional)
  isOpen = false, (optional)
  disabled = false, (optional)
  children, (required)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Accordion/Open</h5>
      </div>

      <div className="sgr-cpage__display">
        <Accordion
          title="Open by default"
          isOpen
        >
          Inner content
        </Accordion>

<SnippetToggle
  component={`
  import { Accordion } from 'segment_react'

  <Accordion
    title="Open by default"
    isOpen
  >
    ...
  </Accordion>
  `}
  propList={`
  // Accordion Props
  title, (required)
  secondary, (optional)
  isOpen = false, (optional)
  disabled = false, (optional)
  children, (required)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>
    </>
  )
}

export default AccordionPage
