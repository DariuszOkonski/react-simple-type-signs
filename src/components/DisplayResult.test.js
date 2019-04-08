import React from 'react';
import ReactDOM from 'react-dom';
import DisplayResult from './DisplayResult';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('DisplayResult tests', () => {
  let value;
  let wrapper;

  beforeAll(() => {
    value = 'aaa';
    wrapper = shallow(<DisplayResult result={value} />);
  });

  afterAll(() => {
    value = '';
    wrapper = '';
  })

  it('DisplayResult renders without a problem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DisplayResult result={value} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matches', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('h2 exists', () => {
    expect(wrapper.find('h2').exists()).toBe(true);
  });

  it('h2 display text as in props', () => {
    expect(wrapper.find('h2').text()).toBe(value.toUpperCase());
  });

});