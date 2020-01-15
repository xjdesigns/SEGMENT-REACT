import React from 'react'
import CodeSnippet from '../helper/code-snippet'
import SnippetToggle from '../helper/snippet-toggle'
import { Form, Input, TextArea } from '../lib'

const FormPage = () => {
  const changer = () => {
    console.warn('this works')
  }

  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Form/Input</h5>
      </div>

      <div className="sgr-cpage__display">
        <Form>
          <Input
            label="I am label"
            id="IN1"
            defaultValue={'I am default'}
            onChange={changer}
          />

          <Input
            label="I am label"
            id="INE1"
            defaultValue={'I am default'}
            onChange={changer}
            hasError
          />
        </Form>

<SnippetToggle
  component={`
  import { Form, Input } from 'segment_react'

  <Form>
    <Input
      label="I am label"
      id="IN1"
      defaultValue={'I am default'}
      onChange={changer}
    />

    // Error State
    <Input
      ...
      hasError
    />
  </Form>
  `}
  propList={`
    // Input Props
  label, (required)
  id, (required)
  type = 'text', (default)
  defaultValue = '', (optional)
  hasError = false, (optional)
  searchAction, (required when "type=search")
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Form/Search</h5>
      </div>

      <div className="sgr-cpage__display">
        <Form>
          <Input
            label="I am search label"
            id="SRC1"
            type="search"
            defaultValue={'I am search'}
            onChange={changer}
            searchAction={changer}
          />
        </Form>
<SnippetToggle
  component={`
  import { Form, Input } from 'segment_react'

  <Form>
    <Input
      label="I am search label"
      id="SRC1"
      type="search"
      defaultValue={'I am search'}
      onChange={changer}
      searchAction={changer}
    />
  </Form>
  `}
  propList={`
    // Input Props
  label, (required)
  id, (required)
  type = 'text', (default)
  defaultValue = '', (optional)
  hasError = false, (optional)
  searchAction, (required when "type=search")
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Form/Text Area</h5>
      </div>

      <div className="sgr-cpage__display">
        <Form>
          <TextArea
            label="I am text area label"
            id="TXTA1"
            type="search"
            defaultValue={'I am text area'}
            cols="30"
            rows="10"
            onChange={changer}
          />
        </Form>

<SnippetToggle
  component={`
  import { Form, TextArea } from 'segment_react'

  <Form>
    <TextArea
      label="I am text area label"
      id="TXTA1"
      type="search"
      defaultValue={'I am text area'}
      cols="30"
      rows="10"
      onChange={changer}
    />
  </Form>
  `}
  propList={`
    // Input Props
  label, (required)
  id, (required)
  defaultValue = '', (optional)
  hasError = false, (optional)
  cols = 30, (default)
  rows = 10, (default)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>
    </>
  )
}

export default FormPage
