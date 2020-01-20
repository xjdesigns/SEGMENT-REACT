import React, { useState } from 'react'
import SnippetToggle from '../helper/snippet-toggle'
import { RangeSlider } from '../lib'

const RangeSliderPage = () => {
  const [rval, setRVal] = useState('22')

  const handleRange = ev => {
    const val = ev.target.value
    setRVal(val)
  }

  return (
    <>
    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Range Slider</h5>
      </div>

      <div className="sgr-cpage__display">
        <RangeSlider value={rval} />

<SnippetToggle
  component={`
  import { RangeSlider } from 'segment_react'

  <RangeSlider value={rval} />
  `}
  propList={`
  // Range Slider Props
  value = '0', (optional)
  min = '0', (optional)
  max = '100', (optional)
  step = '1', (optional)
  disabled, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Range Slider/Min Max</h5>
      </div>

      <div className="sgr-cpage__display">
        <RangeSlider value={rval} min="10" max='40' onChange={handleRange} />
        <div>
          {rval}
        </div>

<SnippetToggle
  component={`
  import { RangeSlider } from 'segment_react'

  <RangeSlider value={rval} min="10" max='40' />
  `}
  propList={`
  // Range Slider Props
  value = '0', (optional)
  min = '0', (optional)
  max = '100', (optional)
  step = '1', (optional)
  disabled, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>

    <div className="sgr-cpage">
      <div className="sgr-cpage__title">
        <h5>Range Slider/Disabled</h5>
      </div>

      <div className="sgr-cpage__display">
        <RangeSlider value={rval} disabled />

<SnippetToggle
  component={`
  import { RangeSlider } from 'segment_react'

  <RangeSlider value={rval} disabled />
  `}
  propList={`
  // Range Slider Props
  value = '0', (optional)
  min = '0', (optional)
  max = '100', (optional)
  step = '1', (optional)
  disabled, (optional)
  ...additionalProps (additional props lets you pass anything)
  `}
/>
      </div>
    </div>
    </>
  )
}

export default RangeSliderPage
