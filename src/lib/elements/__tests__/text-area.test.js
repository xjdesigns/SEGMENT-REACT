import React from 'react'
import { shallow } from 'enzyme'
import TextArea from '../text-area'

describe('<TextArea />', () => {
  it('should render component', () => {
    const comp = shallow(<TextArea />)
    expect(comp).toBeDefined()
  })

  it('should render error class', () => {
    const comp = shallow(<TextArea hasError />)
    expect(comp.find('textarea').hasClass('has-error')).toBe(true)
  })
})
