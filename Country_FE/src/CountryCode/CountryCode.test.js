import React from 'react';
import { shallow } from 'enzyme';
import Country from './Country';

describe('Country', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Country />);
    expect(wrapper).toMatchSnapshot();
  });
});
