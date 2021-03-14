import React, { Component } from 'react';

class AddEmployee extends Component {
  initialState = {
    employeeName: '',
    employeeJob: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { employeeName, employeeJob } = this.state;
    const employee = {
      name: employeeName,
      job: employeeJob,
    };
    this.props.addEmployee(employee);
    this.setState(this.initialState);
  };

  render() {
    const { employeeName, employeeJob } = this.state;
    return (
      <div className="m-2">
        <form>
          <div className="form-group">
            <label htmlFor="employeeName">Name</label>
            <input
              type="text"
              className="form-control"
              name="employeeName"
              id="employeeName"
              value={employeeName}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="employeeJob">Job</label>
            <input
              type="text"
              className="form-control"
              name="employeeJob"
              id="employeeJob"
              value={employeeJob}
              onChange={this.handleChange}
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddEmployee;
