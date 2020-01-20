import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../progress-bar';
describe('<ProgressBar />', () => {
  it('should render component', () => {
    const comp = shallow(React.createElement(ProgressBar, null));
    expect(comp).toBeDefined();
  });
  it('should render with title', () => {
    const comp = shallow(React.createElement(ProgressBar, {
      progress: '30',
      title: true,
      "data-id": "progress"
    }));
    expect(comp.find('[data-id="progress"]').hasClass('spx-progress--title')).toBe(true);
  });
});