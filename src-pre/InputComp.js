import React, { Component } from 'react';
import './App.css';
import './Headline.js';

class InputComp extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentWord: "",
    }
  }
  
  updateWord = (event) => {
    this.setState({
      currentWord: event.target.value
    });
  }
  submitWord = () => {
    this.props.submit(this.state.currentWord);
  }

  render() {
    return (
      <div className="inputComp">
        <input placeholder="Type something..." onChange={this.updateWord}></input> 
        <button onClick={this.submitWord}>SUBMIT</button>
      </div>
    );
  }
}

export default InputComp;
