import React, { Component } from "react";

class App extends Component {
  render() {
    const hStyle = { color: "white" };
    const hRow = { backgroundColor: "White", height: "5px" };

    return (
      <div className="container">
        <h1>Very Simple To Do App</h1>
        <h2 style={hStyle}>Track all of the things</h2>
        <hr style={hRow} />
        {/* <header> */}
        <div className="card" style={{width: 24 + 'rem'}}>
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">I Want To...</h5>
            <input>
            </input>
            <h5 className="card-title">How Much Of A Priority is This?</h5>
            <select>
              Select A Priority
            </select>
            <a href="#" className="btn btn-primary">
              Add
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
