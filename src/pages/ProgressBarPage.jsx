import React, { useState, useEffect } from 'react'
import SnippetToggle from '../helper/snippet-toggle'
import { ProgressBar } from '../lib'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const ProgressBarPage = () => {
  const [prog, setProg] = useState('30')
  let interval

  const makeProgress = () => {
    interval = setInterval(() => {
      const val = getRandomIntInclusive(0, 99);
      setProg(`${val}`)
    }, 5000)
  }

  useEffect(() => {
    makeProgress()

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Progress Bar</h5>
      </div>

      <div className="sgr-cpage__display">
        <ProgressBar progress={prog} />

<SnippetToggle
  component={`
  import { ProgressBar } from 'segment_react'

  <ProgressBar progress={'30'} />
  `}
  propList={`
  // Progress Bar Props
  progress = '0', (required)
  title, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Progress Bar/Title</h5>
      </div>

      <div className="sgr-cpage__display">
        <ProgressBar progress={prog} title />

<SnippetToggle
  component={`
  import { ProgressBar } from 'segment_react'

  <ProgressBar progress={'30'} title />
  // Renders the progress as the title
  `}
  propList={`
  // Progress Bar Props
  progress = '0', (required)
  title, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>
    </>
  )
}

export default ProgressBarPage
