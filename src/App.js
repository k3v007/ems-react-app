import React, { Component } from 'react';
import ViewEmployee from './ViewEmployee';
import AddEmployee from './AddEmployee';
import Loading from './Loading';
import axios from 'axios';

class App extends Component {
  state = {
    employeeData: [],
    loading: true,
  };

  componentDidMount() {
    this.getEmployeeDataFromApi();
  }

  getEmployeeDataFromApi = () => {
    const url =
      'https://1d67f824-c370-4a15-912f-f14f1a2e9d29.mock.pstmn.io/employees';
    axios
      .get(url)
      .then((response) => {
        this.setState({
          employeeData: this.processEmployeeData(response.data),
          loading: false,
        });
      })
      .catch((err) => console.log(err.message, err.response));
  };

  processEmployeeData = (response) => {
    return response.employeeData.map((e) => {
      return {
        name: e.name,
        job: e.job,
      };
    });
  };

  deleteEmployee = (index) => {
    const { employeeData } = this.state;
    this.setState({
      employeeData: employeeData.filter((employee, i) => {
        return i !== index;
      }),
    });
  };

  addEmployee = (employee) => {
    console.log(employee);
    this.setState({
      employeeData: [...this.state.employeeData, employee],
    });
  };

  resetEmployeeData = () => {
    this.setState({
      employeeData: [],
      loading: true,
    });
    this.getEmployeeDataFromApi();
  };

  render() {
    return (
      <div className="container">
        <div style={{ padding: '20px 50px', margin: '0px auto' }}>
          <h1 style={{ display: 'inline' }}>Employee Dashboard</h1>
          <button
            className="btn btn-success"
            style={{ float: 'right' }}
            onClick={this.resetEmployeeData}
          >
            Reset
          </button>
        </div>
        {this.state.loading ? (
          <Loading />
        ) : (
          <ViewEmployee
            employeeData={this.state.employeeData}
            deleteEmployee={this.deleteEmployee}
          />
        )}
        <AddEmployee addEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
