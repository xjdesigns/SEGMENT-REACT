import React from 'react'
import { shallow } from 'enzyme'
import Button from '../button'

describe('<Button />', () => {
  it('should render the component', () => {
    const btn = shallow(<Button />)
    expect(btn).toBeDefined()
  })
})
