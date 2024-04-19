import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import RangeSlider from '../range-slider'

describe('Radio Component', () => {
  it('Renders the radio', () => {
    const { container } = render(<RangeSlider />)
    expect(container).toBeInTheDocument(true)
  })

  it('Renders the radio with disabled class', async () => {
    const { container } = render(<RangeSlider disabled />)
    const input = container.querySelector('.spx-is-disabled')

    expect(input).toBeInTheDocument()
  })

  it('Renders the radio and handles onchange', async () => {
    const mockFn = {
      fn: () => {}
    }
    const spy = vi.spyOn(mockFn, 'fn')
    const { container } = render(<RangeSlider onChange={spy} id="test" />)
    const c = container.querySelector('input')
    await fireEvent.change(c, { target: { value: 20 } })

    expect(spy).toHaveBeenCalledTimes(1)
  })
})