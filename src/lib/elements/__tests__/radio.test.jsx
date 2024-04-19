import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Radio from '../radio'

describe('Radio Component', () => {
  it('Renders the radio', () => {
    const { container } = render(<Radio />)
    expect(container).toBeInTheDocument(true)
  })

  it('Renders the radio with label', async () => {
    const { container } = render(<Radio label="Radio label" />)
    const input = container.querySelector('label')

    expect(input).toBeInTheDocument()
  })

  it('Renders the radio with label', async () => {
    const mockFn = {
      fn: () => {}
    }
    const spy = vi.spyOn(mockFn, 'fn')
    const { container } = render(<Radio label="label text" onChange={spy} id="test" />)
    const c = container.querySelector('label')
    await userEvent.click(c)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})