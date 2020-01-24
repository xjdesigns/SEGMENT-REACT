import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../loading'

describe('<Loading />', () => {
  it('should render component', () => {
    const comp = shallow(<Loading />)
    expect(comp).toBeDefined()
  })
})
