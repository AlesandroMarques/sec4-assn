import React, { Component } from 'react';
import ValidationComp from './Validation/Validation';
import CharComp from './Characters/Characters';
import './App.css';

class App extends Component {

  state = {
    inputText: "",
    inputLength:0


  }

  changeInputListener = (event) => {
    const input = event.target.value;
    const len = input.length;
    this.setState(
      {
        inputText: input,
        inputLength: len
      }
    );
  }

  deleteCharListener = (index) => {
    const charArr = this.state.inputText.split('');
    charArr.splice(index ,1);
    const charStr = charArr.join('');
    const charStrLen = charStr.length;
    this.setState(
      {
        inputText: charStr,
        inputLength:charStrLen
      }
    );

  }

 


  render() {



let output = (
  <div className="App">
<h1>Please Enter some text</h1>
          <input type="text" onChange={this.changeInputListener} value={this.state.inputText}/>
    <p>{this.state.inputText}</p>
    <p>{this.state.inputLength}</p>
    <ValidationComp getLen={this.state.inputLength}/>
  </div>
);


let charOutput = (
<div>
  {  this.state.inputText.split('').map( (c , i) =>{
    return(
      <CharComp
      val = {c}
      delChar = {() => this.deleteCharListener(i)}
      />
    )
  }
  )
  }
</div>
);



    return (
      <div className="App">
          {output}
          {charOutput}
      </div>
    );
  }
}

export default App;
