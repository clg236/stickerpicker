import React, { Component } from 'react';
import './App.css';

// in this file we build our main "App" component.
// inside it we will render a Headline and a InputComp component.
// to allow for that we need to inport them from other files.
//this is done in the next two lines:
import Headline from './Headline.js';
import InputComp from './InputComp.js';


//now we start building the App component. To start, we make a copy/an instance
//of React's Component "blueprint" which brings a lot of functionality. 
//On that, we then extend to make it our own.
class App extends Component {
  //This component has its own state (data). We initialize it 
  //in this constructor function. The only data we want for 
  //now is an array holding words. See it 4 lines below :)
  constructor(props) {
    super(props);
    this.state = {
      words: ['paradise', 'bicycle', 'jianbing', 'timezone', 'hotdog', 'dog'],
    }
  }

  //Functions go here

  addWord = (newWord) => {

    let newWords = this.state.words.concat(newWord);

    // overwrite the current words in our state
    // with the updated one
    this.setState({
      words: newWords
    })

  }

  render() {
    return (
      <div className="App">

        <Headline greeting={"HAPPY WEDNESDAY!"}></Headline>

        <InputComp submit={this.addWord}></InputComp>
        <div className = "display">
          {this.state.words.map( word => <div className="box"><p>{word}</p></div> )}
        </div>
        

      </div>
    );
  }
}

export default App;
