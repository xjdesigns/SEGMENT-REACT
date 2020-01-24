import React from 'react'
import SnippetToggle from '../helper/snippet-toggle'
import { Loading } from '../lib'

const LoadingPage = () => {
  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Loading</h5>
      </div>

      <div className="sgr-cpage__display">
        <Loading />

<SnippetToggle
  component={`
  import { Loading } from 'segment_react'

  <Loading />
  `}
  propList={`
  // Loading Props
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>
    </>
  )
}

export default LoadingPage
