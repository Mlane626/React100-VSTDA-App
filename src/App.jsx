import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "Add a note"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const hStyle = { color: "white" };
    const hRow = { backgroundColor: "White", height: "5px" };

    return (
      <div className="container">
        <h1>Very Simple To Do App</h1>
        <h2 style={hStyle}>Track all of the things</h2>
        <hr style={hRow} />
        <div className='row'>
          <div className="col">
          <div className="card" style={{ width: 24 + "rem" }}>
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">I Want To...</h5>
            <textarea 
            placeholder='Enter Task'
            autoFocus='autofocus'
            type='text'/>
            <h5 className="card-title">How Much Of A Priority is This?</h5>
            <select value={this.state.selectedValue} onChange={this.handleChange}>
          <option value="Highest Priority">Highest Priority</option>
          <option value="Medium Priority">Medium Priority </option>
          <option value="Lowest Priority">Lowest Priority</option>
        </select>
            <a href="#" className="btn btn-primary">
              Add
            </a>
          </div>
          
            </div>
          </div>
          <div className="col">
          <div className="card" style={{ width: 24 + "rem" }}>
          <div className="card-header">View To-do's</div>
        </div>
          </div>
        </div>
            
      </div>



    );
  }
}

export default App;