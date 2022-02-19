import React from 'react';
import './calculator.scss';
import Key from './key';
import calculate from '../logic/calculate';
import Display from './display';

const Calculator = class Value extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '0', next: '', operation: null };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    const obj = { ...this.state };
    const melojuma = calculate(obj, e.target.value);
    this.setState(melojuma);
    console.log(obj);
    console.log(melojuma);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <Display total={total} next={next} operation={operation} />
        <div className="panel">
          <div className="buttons">
            <div className="row">
              <Key clickEvent={this.clickHandler} value="AC" />
              <Key clickEvent={this.clickHandler} value="+/-" />
              <Key clickEvent={this.clickHandler} value="%" />
            </div>
            <div className="row">
              <Key clickEvent={this.clickHandler} value="7" />
              <Key clickEvent={this.clickHandler} value="8" />
              <Key clickEvent={this.clickHandler} value="9" />
            </div>
            <div className="row">
              <Key clickEvent={this.clickHandler} value="4" />
              <Key clickEvent={this.clickHandler} value="5" />
              <Key clickEvent={this.clickHandler} value="6" />
            </div>
            <div className="row">
              <Key clickEvent={this.clickHandler} value="1" />
              <Key clickEvent={this.clickHandler} value="2" />
              <Key clickEvent={this.clickHandler} value="3" />
            </div>
            <div className="row">
              <Key clickEvent={this.clickHandler} value="0" className="double-size" />
              <Key clickEvent={this.clickHandler} value="." />
            </div>
          </div>
          <div className="operations">
            <Key clickEvent={this.clickHandler} value="/" />
            <Key clickEvent={this.clickHandler} value="*" />
            <Key clickEvent={this.clickHandler} value="-" />
            <Key clickEvent={this.clickHandler} value="+" />
            <Key clickEvent={this.clickHandler} value="=" className="equal" />
          </div>
        </div>
      </div>
    );
  }
};

export default Calculator;
