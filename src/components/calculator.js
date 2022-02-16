import React from 'react';

class Value extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (<div>
      <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Value;