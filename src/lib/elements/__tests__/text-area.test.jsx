import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import TextArea from '../text-area'

describe('TextArea Component', () => {
  it('Renders textarea', () => {
    const { container } = render(<TextArea />)
    expect(container).toBeInTheDocument(true)
  })

  it('Renders textarea with error', async () => {
    const { container } = render(<TextArea hasError />)
    const input = container.querySelector('.has-error')

    expect(input).toBeInTheDocument()
  })
})