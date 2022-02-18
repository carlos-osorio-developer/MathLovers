import React from 'react';
import './calculator.scss';
import Key from './key';

const Calculator = class Value extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    const { value } = this.state;
    return (
      <div className="calculator">
        <div className="display"><p>{value}</p></div>
        <div className="panel">
          <div className="buttons">
            <div className="row">
              <Key value="AC" />
              <Key value="+/-" />
              <Key value="%" />
            </div>
            <div className="row">
              <Key value="7" />
              <Key value="8" />
              <Key value="9" />
            </div>
            <div className="row">
              <Key value="4" />
              <Key value="5" />
              <Key value="6" />
            </div>
            <div className="row">
              <Key value="1" />
              <Key value="2" />
              <Key value="3" />
            </div>
            <div className="row">
              <Key value="0" className="double-size" />
              <Key value="." />
            </div>
          </div>
          <div className="operations">
            <Key value="/" />
            <Key value="*" />
            <Key value="-" />
            <Key value="+" />
            <Key value="=" className="equal" />
          </div>
        </div>
      </div>
    );
  }
};

export default Calculator;
