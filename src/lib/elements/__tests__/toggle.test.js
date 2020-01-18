import React from 'react'
import { shallow } from 'enzyme'
import Toggle from '../toggle'

describe('<Toggle />', () => {
  it('should render component', () => {
    const comp = shallow(<Toggle />)
    expect(comp).toBeDefined()
  })

  it('should handle error class', () => {
    const comp = shallow(<Toggle disabled />)
    expect(comp.find('label').hasClass('spx-is-disabled')).toBe(true)
  })
})
