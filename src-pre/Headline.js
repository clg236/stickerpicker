import React, { Component } from 'react';
import './App.css';

class Headline extends Component {

  render() {
    return (
      <div className="headline">
        <div className="logo"></div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Headline;
