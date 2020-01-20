import React from 'react';
import { shallow } from 'enzyme';
import Form from '../form';
describe('<Form />', () => {
  it('should render the component', () => {
    const comp = shallow(React.createElement(Form, null));
    expect(comp).toBeDefined();
  });
  it('should render the children', () => {
    const comp = shallow(React.createElement(Form, null, React.createElement("input", null)));
    expect(comp.find('input')).toHaveLength(1);
  });
});