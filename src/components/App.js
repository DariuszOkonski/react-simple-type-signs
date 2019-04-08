import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import TransformData from './TransformData';
import DisplayResult from './DisplayResult';

class App extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleClick = () => {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <TransformData
          change={this.handleChange}
          click={this.handleClick}
          value={this.state.value}
        />

        <DisplayResult
          result={this.state.value}
        />
      </React.Fragment>
    );
  }
}

export default App;
