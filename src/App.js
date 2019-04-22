import React, { Component } from 'react';
import './App.css';
import Headline from './Headline.js';
import InputComp from './InputComp.js';
import superAgent from 'superagent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }

  //Functions go here

  findGifs = (term) => {
    const url = `http://api.giphy.com/v1/stickers/search?q=${term}&api_key=SWq0akBClfv0noc1kvCvN8bCBGAKqAZG&limit=10`;

    superAgent.get(url, (error, response) => {
      console.log(response.body.data[0]);
      this.setState({ gifs: response.body.data });
    });
  }

  render() {
    return (
      <div className="App">

        <Headline greeting={"WECHAT STICKER FINDER!"}></Headline>

        <InputComp submit={this.findGifs}></InputComp>
        <div className = "display">
          {this.state.gifs.map( gif => <div className="box"><img src={gif.images.downsized.url} width="200" height="200" /></div> )}
        </div>
        
      </div>
    );
  }
}

export default App;
