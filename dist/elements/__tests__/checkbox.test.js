import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../checkbox';
describe('<Checkbox />', () => {
  it('should render the component', () => {
    const comp = shallow(React.createElement(Checkbox, null));
    expect(comp).toBeDefined();
  });
  it('should render the label text', () => {
    const comp = shallow(React.createElement(Checkbox, {
      "data-id": "checkbox",
      label: "label text"
    }));
    expect(comp.find('[data-id="checkbox"]').text()).toEqual('label text');
  });
  it('should handle a handler on change', () => {
    const fn = jest.fn();
    const comp = shallow(React.createElement(Checkbox, {
      onChange: fn
    }));
    const label = comp.find('label');
    label.simulate('change');
    expect(fn).toHaveBeenCalled();
  });
});