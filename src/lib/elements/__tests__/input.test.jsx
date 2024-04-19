import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Input from '../input'

describe('Input Component', () => {
  it('Renders the input', () => {
    const { container } = render(<Input />)
    expect(container).toBeInTheDocument(true)
  })

  it('Renders the input as text', async () => {
    const { container } = render(<Input type="text" />)
    const input = container.querySelector('input[type=text]')

    expect(input).toBeInTheDocument()
  })

  it('Renders the input with search', async () => {
    const { container } = render(<Input type="search" />)
    const input = container.querySelector('input[type=search]')

    expect(input).toBeInTheDocument()
  })

  it('Renders the input as error', async () => {
    const { container } = render(<Input type="text" hasError />)
    const input = container.querySelector('.has-error')

    expect(input).toBeInTheDocument()
  })
})