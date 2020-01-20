import React from 'react'
import { shallow } from 'enzyme'
import ActionPanel from '../action-panel'

describe('<ActionPanel />', () => {
  it('should render component', () => {
    const comp = shallow(<ActionPanel />)
    expect(comp).toBeDefined()
  })

  it('should render base action and handle', () => {
    const fn = jest.fn()
    const comp = shallow(<ActionPanel baseAction={fn} baseIcon="check" />)
    comp.find('[data-id="BaseActionBtn"]').simulate('click')
    expect(fn).toHaveBeenCalled()
  })

  it('should render the actions', () => {
    const comp = shallow(<ActionPanel actions={<button data-id="ActionBtn"></button>} />)
    expect(comp.find('[data-id="ActionBtn"]')).toHaveLength(1)
  })
})
