import React from 'react'
import { shallow } from 'enzyme'
import Form from '../form'

describe('<Form />', () => {
  it('should render the component', () => {
    const comp = shallow(<Form />)
    expect(comp).toBeDefined()
  })

  it('should render the children', () => {
    const comp = shallow(<Form><input /></Form>)
    expect(comp.find('input')).toHaveLength(1)
  })
})
