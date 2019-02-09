/* eslint-disable default-case */
import React, {Component} from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values:[0,0],
  current:0
}
export default class Calculator extends Component {

  state = { ...initialState };

  clearMemory = x => {
    this.setState({...initialState})
  }

  addDigit = x => {

    if(x === '.' && this.state.displayValue.includes('.')) return
    const clearDisplay = this.state.displayValue === '0'|| this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + x
    this.setState({displayValue, clearDisplay:false})

    if(x !== '.'){
      const position = this.state.current
      const values = [...this.state.values]
      const newValue = parseFloat(displayValue)
      values[position] = newValue;
      this.setState({values})
    }

    console.log(this.state)
  }
  setOperation = operation => {

    if(this.state.current === 0) {
      this.setState({current:1, clearDisplay:true, operation})
    } else {
      let equals = operation === '='
      let currentOperation = this.state.operation
      let result = 0
      switch(currentOperation){
        case '+':
          result = this.state.values[0] + this.state.values[1]
          break;
        case '-':
          result = this.state.values[0] - this.state.values[1]
          break;
        case '/':
          result = this.state.values[0] / this.state.values[1]
          break;
        case '*':
          result = this.state.values[0] * this.state.values[1]
          break;
      }
      const values = [...this.state.values]
      values[0] = result
      values[1] = 0;

      this.setState({
                      clearDisplay:!equals,
                      operation: equals ? null : operation,
                      current:equals ? 0 : 1,
                      values,
                      displayValue:values[0]
                    })

    }






    console.log(this.state)
  }

    render() {
      return(
        <div className="calculator">
          <Display value={this.state.displayValue}/>
          <Button label="AC" click={this.clearMemory} triple/>
          <Button label="/" click={this.setOperation} operation/>
          <Button label="7" click={this.addDigit}/>
          <Button label="8" click={this.addDigit}/>
          <Button label="9" click={this.addDigit}/>
          <Button label="*" click={this.setOperation} operation/>
          <Button label="4" click={this.addDigit}/>
          <Button label="5" click={this.addDigit}/>
          <Button label="6" click={this.addDigit}/>
          <Button label="-" click={this.setOperation} operation/>
          <Button label="1" click={this.addDigit}/>
          <Button label="2" click={this.addDigit}/>
          <Button label="3" click={this.addDigit}/>
          <Button label="+" click={this.setOperation} operation/>
          <Button label="0" click={this.addDigit} double/>
          <Button label="." click={this.addDigit}/>
          <Button label="=" click={this.setOperation} operation/>
        </div>
      )
  }
}