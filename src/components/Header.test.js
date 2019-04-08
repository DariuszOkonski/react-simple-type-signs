import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header tests', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Header />);
  });

  afterAll(() => {
    wrapper = '';
  });

  it('Header renders without a problem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matches', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('h1 tag exists', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
  })

  it('h1 renders', () => {
    expect(wrapper.find('h1.header').text()).toBe('Type signs app');
  });

});