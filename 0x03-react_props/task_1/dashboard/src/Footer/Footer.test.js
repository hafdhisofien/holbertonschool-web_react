import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders footer', () => {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});

it('renders footer', () => {
  expect(wrapper.find('footer.App-footer p').exists()).toEqual(true);
  expect(wrapper.find('footer.App-footer p').text()).toContain('Copyright');
});