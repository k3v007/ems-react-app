import React, { Component } from 'react';

const TableHeader = (props) => {
  return (
    <thead className="m-2">
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th style={{ textAlign: 'center' }}>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows =
    props.employeeData &&
    props.employeeData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button
              className="btn btn-outline-danger btn-sm btn-block"
              type="button"
              onClick={() => props.deleteEmployee(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

  return <tbody>{rows}</tbody>;
};

class ViewEmployee extends Component {
  render() {
    const { employeeData, deleteEmployee } = this.props;
    return (
      <div>
        <table cellPadding="10">
          <TableHeader />
          <TableBody
            employeeData={employeeData}
            deleteEmployee={deleteEmployee}
          />
        </table>
      </div>
    );
  }
}

export default ViewEmployee;
