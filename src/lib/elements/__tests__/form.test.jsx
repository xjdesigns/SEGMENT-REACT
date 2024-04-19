import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../form'

describe('Form Component', () => {
  it('Renders the form', () => {
    const { container } = render(<Form />)
    expect(container).toBeInTheDocument(true)
  })

  it('Renders the form and child element', async () => {
    const { container } = render(<Form><input /></Form>)
    const input = container.querySelector('input')
    await userEvent.type(input, 'hello world')

    expect(input.value).toEqual('hello world')
  })
})