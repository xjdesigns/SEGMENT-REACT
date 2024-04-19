import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Toggle from '../toggle'

describe('Toggle Component', () => {
  it('Renders the toggle', () => {
    const { container } = render(<Toggle />)
    expect(container).toBeInTheDocument(true)
  })

  it('Renders the toggle with disabled class', async () => {
    const { container } = render(<Toggle disabled />)
    const input = container.querySelector('.spx-is-disabled')

    expect(input).toBeInTheDocument()
  })

  it('Renders the toggle and handles onchange', async () => {
    const mockFn = {
      fn: () => {}
    }
    const spy = vi.spyOn(mockFn, 'fn')
    const { container } = render(<Toggle onChange={spy} id="test" />)
    const c = container.querySelector('input')
    await userEvent.click(c)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})