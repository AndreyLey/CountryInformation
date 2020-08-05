import React from 'react';
import { shallow } from 'enzyme';
import CountriesCard from './CountriesCard';

describe('CountriesCard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CountriesCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
