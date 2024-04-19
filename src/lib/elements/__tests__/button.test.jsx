import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from '../button'

describe('Button Component', () => {
  it('Renders the button', () => {
    const { container } = render(<Button>Hello World</Button>)
    const button = screen.getByText('Hello World')

    expect(button).toBeDefined()
    expect(container.querySelector('.spx-btn')).toBeInTheDocument(true)
  })

  it('Renders the button with icon', () => {
    const { container } = render(<Button icon>Hello World</Button>)
    expect(container.querySelector('.spx-btn--icon')).toBeInTheDocument(true)
  })

  it('Renders the button with material class', () => {
    const { container } = render(<Button material>Hello World</Button>)
    expect(container.querySelector('.spx-btn--material')).toBeInTheDocument(true)
  })

  it('Renders the button with circle class', () => {
    const { container } = render(<Button circle>Hello World</Button>)
    expect(container.querySelector('.spx-btn--circle')).toBeInTheDocument(true)
  })

  it('Renders the button with block class', () => {
    const { container } = render(<Button block>Hello World</Button>)
    expect(container.querySelector('.spx-btn--block')).toBeInTheDocument(true)
  })

  it('Renders the button with inverted class', () => {
    const { container } = render(<Button inverted>Hello World</Button>)
    expect(container.querySelector('.spx-btn--pr--inverted')).toBeInTheDocument(true)
  })

  it('Renders the button with size class', () => {
    const { container } = render(<Button size="sm">Hello World</Button>)
    expect(container.querySelector('.spx-btn--sm')).toBeInTheDocument(true)
  })
})