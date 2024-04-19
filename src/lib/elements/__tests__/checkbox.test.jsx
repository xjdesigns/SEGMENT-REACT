import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from '../checkbox'

describe('Checkbox Component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('Renders the checkbox', () => {
    const { container } = render(<Checkbox label="label text" />)
    const checkbox = screen.getByText('label text')

    expect(checkbox).toBeDefined()
    expect(container).toBeInTheDocument(true)
  })

  it('Renders the checkbox and handles change event', async () => {
    const mockFn = {
      fn: () => {}
    }
    const spy = vi.spyOn(mockFn, 'fn')
    const { container } = render(<Checkbox label="label text" onChange={spy} id="test" />)
    const c = container.querySelector('.spx-checkbox')
    await userEvent.click(c)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})