import React from 'react'
import { shallow } from 'enzyme'
import Radio from '../radio'

describe('<Radio />', () => {
  it('should render component', () => {
    const comp = shallow(<Radio />)
    expect(comp).toBeDefined()
  })

  it('should render the label', () => {
    const comp = shallow(<Radio label="Radio label" />)
    expect(comp.find('label').text()).toEqual('Radio label')
  })
})
