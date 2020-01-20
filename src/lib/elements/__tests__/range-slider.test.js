import React from 'react'
import { shallow } from 'enzyme'
import RangeSlider from '../range-slider'

describe('<RangeSlider />', () => {
  it('should render component', () => {
    const comp = shallow(<RangeSlider />)
    expect(comp).toBeDefined()
  })

  it('should render disabled class', () => {
    const comp = shallow(<RangeSlider disabled />)
    expect(comp.find('[data-id="RangeSliderWrap"]').hasClass('spx-is-disabled')).toBe(true)
  })
})
