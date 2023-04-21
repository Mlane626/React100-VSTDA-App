import React, { Component } from 'react';

class App extends Component {

  render() {
    const hStyle = { color: 'white' };
    const hRow = { backgroundColor: 'White', height: '5px' };

    return (
      <div className='container'>
        <h1>Very Simple To Do App</h1>
        <h2 style={hStyle}>Track all of the things</h2>
        <hr style={hRow} />
        <header>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-header" style={{ backgroundColor: "#a9a9a9" }}>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
