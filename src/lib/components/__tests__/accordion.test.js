import React from 'react'
import { shallow } from 'enzyme'
import Accordion from '../accordion'

describe('<Accordion />', () => {
  it('should render component', () => {
    const comp = shallow(<Accordion />)
    expect(comp).toBeDefined()
  })

  it('should render with open class', () => {
    const comp = shallow(<Accordion isOpen data-id="accordion" />)
    expect(comp.find('[data-id="accordion"]').hasClass('is-active')).toBe(true)
  })

  it('should render the children', () => {
    const comp = shallow(<Accordion><div><p>Hello</p></div></Accordion>)
    expect(comp.find('p')).toHaveLength(1)
  })
})
