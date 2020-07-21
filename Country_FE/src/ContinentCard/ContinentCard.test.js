import React from 'react';
import { shallow } from 'enzyme';
import ContinentCard from './ContinentCard';

describe('ContinentCard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ContinentCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
