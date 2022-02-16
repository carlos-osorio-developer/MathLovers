import React from 'react';
import './calculator.scss';

class Value extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (<div className='calculator'>
        <div className='display'><p>{this.state.value}</p></div>
        <div className='panel'>
          <div className='buttons'>
            <div className='row'>
              <input type='button' value='AC'></input>
              <input type='button' value='+/-'></input>
              <input type='button' value='%'></input>
            </div>
            <div className='row'>
              <input type='button' value='7'></input>
              <input type='button' value='8'></input>
              <input type='button' value='9'></input>
            </div>
            <div className='row'>
              <input type='button' value='4'></input>
              <input type='button' value='5'></input>
              <input type='button' value='6'></input>
            </div>
            <div className='row'>
              <input type='button' value='1'></input>
              <input type='button' value='2'></input>
              <input type='button' value='3'></input>
            </div>
            <div className='row'>
              <input type='button' value='0' className='double-size'></input>
              <input type='button' value='.'></input>
            </div>
          </div>
          <div className='operations'>
            <input type='button' value='/'></input>
            <input type='button' value='*'></input>
            <input type='button' value='-'></input>
            <input type='button' value='+'></input>
            <input type='button' value='=' className='equal'></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Value;