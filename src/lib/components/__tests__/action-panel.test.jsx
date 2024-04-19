import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ActionPanel from '../action-panel'

describe('ActionPanel Component', () => {
  it('Renders the action panel', () => {
    const { container } = render(<ActionPanel />)
    expect(container).toBeInTheDocument(true)
  })

  it('Renders the action panel with actions', () => {
    const { container } = render(<ActionPanel actions={<button data-id="ActionBtn"></button>} />)
    expect(container.querySelector('[data-id="ActionBtn"]')).toBeInTheDocument(true)
  })

  it('Renders the action panel with actions and callback', async () => {
    const mockFn = {
      fn: () => {}
    }
    const spy = vi.spyOn(mockFn, 'fn')
    const { container } = render(<ActionPanel baseAction={spy} baseIcon="check" />)
    const c = container.querySelector('[data-id="BaseActionBtn"]')
    await userEvent.click(c)

    expect(spy).toHaveBeenCalledTimes(1)
  })
})