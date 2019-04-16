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
  constructor(props){
    super(props);
    this.state = {
      words: ['paradise', 'bycicle', 'jianbing', 'timezone'],
    }
  }
  
  // this is the function that adds new words to the words array
  // in the state. 
  // further below we pass this function down to the InputiComp component,
  // so that new words that are entered there can directly be added.
  // the function has one parameter ("newWord") which means that 
  // when it is called we need to pass a string between the two brackets
  addWord = (newWord) => {
    // the string that is passed it which the function is called
    // is available under the variable name "newWord" withing this 
    // function.

    // we make a copy (with the "slice()" method) of the 
    // words array as it currently is:
    let currentWords = this.state.words.slice();
    
    // add the new word to the copy:
    currentWords.push(newWord);
    
    // overwrite the current words in our state
    // with the updated one
    this.setState({
      words: currentWords  
    })

  }

  render() {
    return (
      <div className="App">

        {/* Use the Headline Component which we imported 
            at the top of this file. It is defined in Headline.js
            Here is also where we pass down props. Note
            we pass down the string "HEADLINE" and make it 
            available (in the component) under the variable name
            "text".     */}

        <Headline text={"HEADLINE"}></Headline> 
        

        {/* Now we use the InputComp Component. Again
            we are passing down a prop, but this time
            the prop is a function! We can then use this
            funciton inside the component under the name
            "submit"    */}

        <InputComp submit={this.addWord}></InputComp>

      </div>
    );
  }
}

export default App;
