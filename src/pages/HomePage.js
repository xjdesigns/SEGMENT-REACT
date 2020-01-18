import React from 'react'
import CodeSnippet from '../helper/code-snippet'

const HomePage = () => {
  return (
    <div className="sgr-base">
      <div>
        <h2>SEGMENT REACT</h2>
      </div>

      <div>
        <p>Welcome to Segment React. This project was built using Segment CSS at its core.</p>
      </div>

      <div>
        <p>First you will want to grab the styles from SEGMENT CSS to include globally.</p>
        <p>
          <a href="https://github.com/xjdesigns/Segment-CSS/tree/master/SEGMENT/1.0.0">SEGMENT CSS</a>
        </p>
        <p>You also want to grab the Eric Meyer reset file to include before SEGMENT CSS.</p>
        <p>
          <a href="https://meyerweb.com/eric/tools/css/reset/">EM Reset</a>
        </p>
        <p>
          And lastly make sure to grab material icons as well. The base index.html has the link ref if needed.
        </p>
      </div>

      <div>
        <h3>Getting Started</h3>
        <div>
<CodeSnippet>
  {`
  npm i segment_react
  `}
</CodeSnippet>
        </div>
      </div>

      <div>
        <h3>Usage</h3>
        <div>
<CodeSnippet>
  {`
  import { Button } from 'react_segment'
  `}
</CodeSnippet>
        </div>
      </div>

      <div>
        <p>Next head over to the base page if you want a suggestion on setting up your index.html file.</p>
      </div>
    </div>
  )
}

export default HomePage
