import React from 'react';
import { shallow } from 'enzyme';
import Button from '../button';
describe('<Button />', () => {
  it('should render the component', () => {
    const btn = shallow(React.createElement(Button, null));
    expect(btn).toBeDefined();
  });
  it('icon class', () => {
    const btn = shallow(React.createElement(Button, {
      icon: true
    }));
    expect(btn.hasClass('spx-btn--icon')).toEqual(true);
  });
  it('material class', () => {
    const btn = shallow(React.createElement(Button, {
      material: true
    }));
    expect(btn.hasClass('spx-btn--material')).toEqual(true);
  });
  it('circle class', () => {
    const btn = shallow(React.createElement(Button, {
      circle: true
    }));
    expect(btn.hasClass('spx-btn--circle')).toEqual(true);
  });
  it('block class', () => {
    const btn = shallow(React.createElement(Button, {
      block: true
    }));
    expect(btn.hasClass('spx-btn--block')).toEqual(true);
  });
  it('inverted class', () => {
    const btn = shallow(React.createElement(Button, {
      inverted: true
    }));
    expect(btn.hasClass('spx-btn--pr--inverted')).toEqual(true);
  });
});