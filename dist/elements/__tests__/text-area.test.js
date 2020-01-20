import React from 'react';
import { shallow } from 'enzyme';
import TextArea from '../text-area';
describe('<TextArea />', () => {
  it('should render component', () => {
    const comp = shallow(React.createElement(TextArea, null));
    expect(comp).toBeDefined();
  });
  it('should render error class', () => {
    const comp = shallow(React.createElement(TextArea, {
      hasError: true
    }));
    expect(comp.find('textarea').hasClass('has-error')).toBe(true);
  });
});