import React from 'react'
import { shallow } from 'enzyme'
import Button from '../button'

describe('<Button />', () => {
  it('should render the component', () => {
    const btn = shallow(<Button />)
    expect(btn).toBeDefined()
  })

  it('icon class', () => {
    const btn = shallow(<Button icon />)
    expect(btn.hasClass('spx-btn--icon')).toEqual(true)
  })

  it('material class', () => {
    const btn = shallow(<Button material />)
    expect(btn.hasClass('spx-btn--material')).toEqual(true)
  })

  it('circle class', () => {
    const btn = shallow(<Button circle />)
    expect(btn.hasClass('spx-btn--circle')).toEqual(true)
  })

  it('block class', () => {
    const btn = shallow(<Button block />)
    expect(btn.hasClass('spx-btn--block')).toEqual(true)
  })

  it('inverted class', () => {
    const btn = shallow(<Button inverted />)
    expect(btn.hasClass('spx-btn--pr--inverted')).toEqual(true)
  })
})
