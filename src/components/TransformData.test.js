import React from 'react';
import ReactDOM from 'react-dom';
import TransformData from './TransformData';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TransformData tests', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<TransformData />);
  });

  afterAll(() => {
    wrapper = '';
  });

  it('TransformData renders without a problem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TransformData />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Snapshot matches', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('All tags exists', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

});