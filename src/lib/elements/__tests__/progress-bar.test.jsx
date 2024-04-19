import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import ProgressBar from '../progress-bar'

describe('ProgressBar Component', () => {
  it('Renders the progress bar', () => {
    const { container } = render(<ProgressBar />)
    expect(container).toBeInTheDocument(true)
  })

  it('Renders the progress bar with title', async () => {
    const { container } = render(<ProgressBar progress={'30'} title />)
    const input = container.querySelector('.spx-progress--title')

    expect(input).toBeInTheDocument()
  })
})