import React, { Component } from 'react';

class Clock extends Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  render() {
    return (
      <div style={{ display: 'inline' }}>
        <div style={{ display: 'inline' }}></div>
        <div style={{ display: 'inline' }}>
          {this.state.time.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default Clock;
