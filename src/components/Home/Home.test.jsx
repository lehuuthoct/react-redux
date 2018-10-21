import React from 'react';
import { shallow } from 'enzyme';

// import component
import Home from './Home';

describe('Home', () => {
  const subject = shallow(<Home />);
  const subjectWithProps = shallow(<Home name="Robin" />);

  it('should render Home component', () => {
    expect(subject.length).toBe(1);
  });


});
