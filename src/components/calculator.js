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
              <input type="button" value="+/-" />
              <input type="button" value="%" />
            </div>
            <div className="row">
              <input type="button" value="7" />
              <input type="button" value="8" />
              <input type="button" value="9" />
            </div>
            <div className="row">
              <input type="button" value="4" />
              <input type="button" value="5" />
              <input type="button" value="6" />
            </div>
            <div className="row">
              <input type="button" value="1" />
              <input type="button" value="2" />
              <input type="button" value="3" />
            </div>
            <div className="row">
              <input type="button" value="0" className="double-size" />
              <input type="button" value="." />
            </div>
          </div>
          <div className="operations">
            <input type="button" value="/" />
            <input type="button" value="*" />
            <input type="button" value="-" />
            <input type="button" value="+" />
            <input type="button" value="=" className="equal" />
          </div>
        </div>
      </div>
    );
  }
};

export default Calculator;
