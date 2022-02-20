import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './calculator.scss';
import Key from './key';
import calculate from '../logic/calculate';
import Display from './display';

const Calculator = ({ settings: initialSettings }) => {
  const [settings, setSettings] = useState(initialSettings);

  const clickHandler = (e) => {
    const calc = calculate(settings, e.target.value);
    setSettings(calc);
  };

  return (
    <div className="calculator">
      <Display total={settings.total} next={settings.next} operation={settings.operation} />
      <div className="panel">
        <div className="buttons">
          <div className="row">
            <Key clickEvent={clickHandler} value="AC" />
            <Key clickEvent={clickHandler} value="+/-" />
            <Key clickEvent={clickHandler} value="%" />
          </div>
          <div className="row">
            <Key clickEvent={clickHandler} value="7" />
            <Key clickEvent={clickHandler} value="8" />
            <Key clickEvent={clickHandler} value="9" />
          </div>
          <div className="row">
            <Key clickEvent={clickHandler} value="4" />
            <Key clickEvent={clickHandler} value="5" />
            <Key clickEvent={clickHandler} value="6" />
          </div>
          <div className="row">
            <Key clickEvent={clickHandler} value="1" />
            <Key clickEvent={clickHandler} value="2" />
            <Key clickEvent={clickHandler} value="3" />
          </div>
          <div className="row">
            <Key clickEvent={clickHandler} value="0" className="double-size" />
            <Key clickEvent={clickHandler} value="." />
          </div>
        </div>
        <div className="operations">
          <Key clickEvent={clickHandler} value="/" />
          <Key clickEvent={clickHandler} value="*" />
          <Key clickEvent={clickHandler} value="-" />
          <Key clickEvent={clickHandler} value="+" />
          <Key clickEvent={clickHandler} value="=" className="equal" />
        </div>
      </div>
    </div>
  );
};

Calculator.defaultProps = { settings: { total: '0', next: '', operation: null } };

Calculator.propTypes = {
  settings: PropTypes.shape(
    {
      total: PropTypes.string,
      next: PropTypes.string,
      operation: PropTypes.string,
    },
  ),
};

export default Calculator;
