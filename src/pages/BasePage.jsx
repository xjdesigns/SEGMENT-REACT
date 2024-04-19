import React from 'react'
import CodeSnippet from '../helper/code-snippet'

const BasePage = () => {
  return (
    <div className="sgr-base">
      <div>
        <h2>Base</h2>
      </div>

      <div>
        <p>Here is a helper base to start off with for an index.html if you want.</p>
      </div>

      <div>
<CodeSnippet>
  {`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>TITLE</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="css/em-reset.css">
      <link rel="stylesheet" href="SEGMENT/1.0.0/1.0.0.css">
    </head>
    <body>
    </body>
  </html>
  `}
</CodeSnippet>
      </div>

      <div>
        Now head over to elements or components and start building something awesome.
      </div>
    </div>
  )
}

export default BasePage
