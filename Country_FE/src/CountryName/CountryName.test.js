import React from 'react';
import { shallow } from 'enzyme';
import CountryName from './CountryName';

describe('CountryName', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountryName />);
    expect(wrapper).toMatchSnapshot();
  });
});
