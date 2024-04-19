import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Loading from '../loading'

describe('Loading Component', () => {
  it('Renders the loading', () => {
    const { container } = render(<Loading />)
    expect(container).toBeInTheDocument(true)
  })
})