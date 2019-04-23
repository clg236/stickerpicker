import React, { Component } from 'react';
import './App.css';


//EXPLANATION:

//This component renders an input element and a button.

//Moreover, it is responsible for (A) keeping track
//of the content of the input box and (B) reporting that
//content back to its parent component when the SUBMIT button
//is pressed.

//(A) is achieved by attaching a "onChange" (line 53) event handler 
//to the input element -> every time the content of the input box
//changes, a function we choose (in this case the "updateWord"
//function) is called. In this function we can retrieve the actual
//text (value) of the input field via the "event">"target" object.
//Once we have the value, we update the state (that is the state of
//this very component) with it.

//(B) is achieved by attaching a "onClick" (line 54) event handler to 
//the button. Everytime the button is clicked, the "submitWord" 
//function is called. Inside that function we read the current value
//of the inpurt field from this component's state ("this.state.currentWord")
//and then pass it into a function that the parent component has 
//given to this component in the form of a prop ("this.props.submit"). 
//As defined in the parent component, that function then adds the new
//word to the words array in the parent's state.



class InputComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTerm: "",
    }
  }
  

  //Functions go here

  //here's our update search term function. It takes in an event, and then sets the current term in our state to be equal to whatever the has been typed in the field
  updateTerm = (event) => {
    this.setState({
      currentTerm: event.target.value
    });
  }
  
  //when the button is clicked, we call this function, which passes the currentTerm in our state UP to the findGifs function in the App component
  submitTerm = (event) => {
    this.props.submit(this.state.currentTerm);

    // stop the page from refreshing.
    event.preventDefault();
  }

  render() {
    return (
      <div className="inputComp">
        <form onSubmit={this.submitTerm}>
            <input placeholder="Type something..." onChange={this.updateTerm}></input>
            <button onClick={this.submitTerm}>GIVE GIF!</button>
        </form>
      </div>
    );
  }
}

export default InputComp;
