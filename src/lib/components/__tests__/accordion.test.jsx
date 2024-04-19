import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Accordion from '../accordion'

describe('Accordion Component', () => {
  it('Renders the accordion', () => {
    const { container } = render(<Accordion />)
    expect(container).toBeInTheDocument(true)
  })

  it('Renders the accordion as open', () => {
    const { container } = render(<Accordion isOpen>Hello World</Accordion>)
    expect(container.querySelector('.is-active')).toBeInTheDocument(true)
  })

  it('Renders the accordion with children', () => {
    const { container } = render(<Accordion><div><p>Hello</p></div></Accordion>)
    expect(container.querySelector('p')).toBeInTheDocument(true)
  })

  it('Renders the accordion as open', async () => {
    const { container } = render(<Accordion data-id="accordion" />)
    expect(container.querySelector('.is-active')).toBeNull()
    const action = container.querySelector('[data-id="AccordionToggleBtn"]')
    await userEvent.click(action)
    expect(container.querySelector('.is-active')).toBeInTheDocument()
  })
})