import React from 'react';
import { shallow } from 'enzyme';
import Continent from './Continent';

describe('Continent', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Continent />);
    expect(wrapper).toMatchSnapshot();
  });
});
