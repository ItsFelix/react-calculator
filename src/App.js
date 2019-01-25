import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import SpecialButton from "./components/SpecialButton";
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  }

  handleEqual = () => {
    this.setState({input: math.eval(this.state.input)})
  }

  changePlusOrMinus = () => {
    this.setState({ input: this.state.input * -1 });
  }

  changeToPercent = () => {
    this.setState({input: this.state.input / 100})
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <SpecialButton handleClear={() => this.setState({input: ""})}>AC</SpecialButton>
            <SpecialButton handleClick={this.changePlusOrMinus}>+/-</SpecialButton>
            <SpecialButton handleClick={this.changeToPercent}>%</SpecialButton>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} className="test">0</Button>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
          </div>
          <div className="row">
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
