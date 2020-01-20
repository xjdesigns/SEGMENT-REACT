import React from 'react';
import { shallow } from 'enzyme';
import Toggle from '../toggle';
describe('<Toggle />', () => {
  it('should render component', () => {
    const comp = shallow(React.createElement(Toggle, null));
    expect(comp).toBeDefined();
  });
  it('should handle error class', () => {
    const comp = shallow(React.createElement(Toggle, {
      disabled: true
    }));
    expect(comp.find('label').hasClass('spx-is-disabled')).toBe(true);
  });
});