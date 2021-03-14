import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <div className="card-body">
          <img src="loading.gif" alt="" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }
}

export default Loading;
