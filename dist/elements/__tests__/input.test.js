import React from 'react';
import { shallow } from 'enzyme';
import Input from '../input';
import Button from '../button';
describe('<Input />', () => {
  it('should render component', () => {
    const comp = shallow(React.createElement(Input, null));
    expect(comp).toBeDefined();
  });
  it('should render the input with type text', () => {
    const comp = shallow(React.createElement(Input, {
      type: "text"
    }));
    expect(comp.find('input[type="text"]')).toHaveLength(1);
  });
  it('should render the input with type search', () => {
    const comp = shallow(React.createElement(Input, {
      type: "search"
    }));
    expect(comp.find('input[type="search"]')).toHaveLength(1);
    expect(comp.find(Button)).toHaveLength(1);
  });
  it('should render the input with error class', () => {
    const comp = shallow(React.createElement(Input, {
      type: "text",
      hasError: true
    }));
    expect(comp.find('input').hasClass('has-error')).toBe(true);
  });
});