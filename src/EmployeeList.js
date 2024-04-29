
import React, { useState } from "react";
import FormatSalaryPipe from "./FormatSalaryPipe";
import CapitalizePipe from "./CapitalizePipe";
import HighlightTextDirective from "./HighlightTextDirective";
import EmployeeDetails from "./EmployeeDetails";
import "./styles.css";

const EmployeeList = ({ employees, deleteEmployee, editEmployee }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={employee.id}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
            >
              <td>
                <HighlightTextDirective text={employee.id} />
              </td>
              <td>
                <HighlightTextDirective text={employee.FirstName} />
              </td>
              <td>
                <HighlightTextDirective text={employee.LastName} />
              </td>
              <td>
                <HighlightTextDirective text={employee.Department} />
              </td>
              <td>
                <FormatSalaryPipe
                  salary={
                    employee.Age > 40
                      ? employee.Age * 10 + 50000
                      : employee.Age * 5 + 50000
                  }
                />
              </td>
              <td>
                <CapitalizePipe
                  text={
                    employee.Age > 40 ? "Senior Employee" : "Junior Employee"
                  }
                />
              </td>
              <td>
                <button onClick={() => editEmployee(employee)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>
                  Delete
                </button>
                <button onClick={() => handleViewDetails(employee)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmployee && <EmployeeDetails employee={selectedEmployee} />}
    </div>
  );
};

export default EmployeeList;
