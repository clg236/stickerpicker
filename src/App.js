import React, {Component} from 'react';
import './App.css';
import Headline from './Headline.js';
import InputComp from './InputComp.js';
import superAgent from 'superagent';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            loading: false
        }
    }

    //Functions go here
    findGifs = (term) => {
        const url = `//api.giphy.com/v1/stickers/search?q=${term}&api_key=SWq0akBClfv0noc1kvCvN8bCBGAKqAZG&limit=10`;

        //use superagent
        superAgent.get(url).then(res => {
          console.log(res.body.data[0]);
        });
    }

    render() {
        // instead of using ```this.state.gifs``` everywhere, we create a variable.
        const gifs = this.state.gifs;

        return (
            <div className="App">

                <Headline greeting={"WECHAT STICKER FINDER!"}></Headline>

                <InputComp submit={this.findGifs}></InputComp>

                <div className="display">

                    {this.state.loading
                        ? <div>Loading...</div>
                        : gifs && gifs.length > 0
                            ? gifs.map((gif, index) => {
                                // ```key``` is required, or react will complain.
                                return (
                                    <div className="box" key={index}>
                                        <img src={gif.images.downsized.url} width="200" height="200"/>
                                    </div>
                                );

                            })
                            : <div>There are no gifs.</div>
                    }
                </div>

            </div>
        );
    }
}

export default App;
