import React, { Component } from 'react';
import './App.css';
import Headline from './Headline.js';
import InputComp from './InputComp.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      words: ['paradise'],
    }
  }

  addWord = (newWord) => {

    let currentWords = this.state.words.slice();
    currentWords.push(newWord);

    this.setState({
      words: currentWords  
    })

  }

  render() {
    return (
      <div className="App">
        <Headline text={"HEADLINE"}></Headline> 
        <InputComp submit={this.addWord}></InputComp>
      </div>
    );
  }
}

export default App;
