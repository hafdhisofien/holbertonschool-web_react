import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});

it('renders login', () => {
  expect(wrapper.find('body.App-body').exists()).toEqual(true);
});

it('renders login', () => {
  expect(wrapper.find('body.App-body input')).toHaveLength(2);
});

it('renders login', () => {
  expect(wrapper.find('body.App-body label')).toHaveLength(2);
});