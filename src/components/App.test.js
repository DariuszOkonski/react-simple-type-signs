import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  afterAll(() => {
    wrapper = '';
  });

  it('App renders without a problem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matches', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Modules exists', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
    expect(wrapper.find('TransformData').exists()).toBe(true);
    expect(wrapper.find('DisplayResult').exists()).toBe(true);
  });

  it('Change state value', () => {
    expect(wrapper.state().value).toBe('');
    wrapper.setState({
      value: 'aaa',
    })
    expect(wrapper.state().value).toBe('aaa');
  });

  it('handleClick event', () => {
    wrapper.setState({
      value: 'aaa'
    })
    expect(wrapper.state().value).toBe('aaa');
    wrapper.find('TransformData').dive().find('button').simulate('click');
    expect(wrapper.state().value).toBe('');
  })
});