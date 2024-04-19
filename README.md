# Segment React Component Library
[![Node.js CI](https://github.com/xjdesigns/SEGMENT-REACT/actions/workflows/node.js.yml/badge.svg)](https://github.com/xjdesigns/SEGMENT-REACT/actions/workflows/node.js.yml)
[![Coverage Status](https://coveralls.io/repos/github/xjdesigns/SEGMENT-REACT/badge.svg?branch=master)](https://coveralls.io/github/xjdesigns/SEGMENT-REACT?branch=master)

## Getting started
Segment react components are built using functional component patterns.

To develop locally you can run the start script to serve a web server. Eventually there will be docs that you will develop in and publish to github pages.

This approach is manual but it does have the added benefit of isolation and full control.

## Docs
Visit the docs [here](https://xjdesigns.github.io/SEGMENT-REACT/)

## CSS (v1.0.0)
This library is intended to be used with SEGMENT CSS. You will need to include the css files to have proper styling.

[SEGMENT CSS](https://xjdesigns.github.io/Segment-CSS/#/)

You must also include the Eric Meyer reset file inside of your project. I wanted to keep this separate so you could device loading strategy.

[EM RESET](https://meyerweb.com/eric/tools/css/reset/)

You must also include material icons inside your index.html file for icons to work.

```bash
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Running the App & output components
Right now this is for local development, you will link this with your other project. You can add your own publish step to NPM.

Create a final build
```bash
npm run build
```

Link for development
```bash
npm link
```

Run in watch mode for development
```bash
npm run dev
```

Run unit tests
```bash
npm run test

or

npm run test:watch || npm run test:coverage
```

## Usage
All components are named exports and can be referenced like so:

```javascript
import { Button } from 'segment_react'
```

## React Version
SEGMENT REACT requires React `^16.8.1`
