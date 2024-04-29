
import React, { useState } from "react";
import "./styles.css";

const AddEmployee = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    id: "",
    FirstName: "",
    LastName: "",
    Gender: "",
    Age: "",
    Salary: "",
    Department: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({
      id: "",
      FirstName: "",
      LastName: "",
      Gender: "",
      Age: "",
      Salary: "",
      Department: ""
    });
  };

  return (
    <div className="cen">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>Id:</label></td>
              <td><input type="text" name="id" value={employee.id} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>First Name:</label></td>
              <td><input type="text" name="FirstName" value={employee.FirstName} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Last Name:</label></td>
              <td><input type="text" name="LastName" value={employee.LastName} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Gender:</label></td>
              <td><input type="text" name="Gender" value={employee.Gender} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Age:</label></td>
              <td><input type="text" name="Age" value={employee.Age} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Salary:</label></td>
              <td><input type="text" name="Salary" value={employee.Salary} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Department:</label></td>
              <td><input type="text" name="Department" value={employee.Department} onChange={handleChange} required  /></td>
            </tr>
          </tbody>
        </table>
        <br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
    
  );
};

export default AddEmployee;
