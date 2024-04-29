
import React, { useState } from "react";
import employeesData from "./employeeData";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import "./App.css";
const Employee = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setIsAdding(false);
  };

  const editEmployee = (employee) => {
    setIsEditing(true);
    setEmployeeToEdit(employee);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setIsEditing(false);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <center>
        <br/>
        <br/>
    <div>
      <h1>Employee Management System</h1>
      {isAdding ? (
        <AddEmployee addEmployee={addEmployee} />
      ) : isEditing ? (
        <EditEmployee
          employeeToEdit={employeeToEdit}
          updateEmployee={updateEmployee}
        />
      ) : (
        <>
          <button onClick={() => setIsAdding(true)} className="add">Add Employee</button>
          <EmployeeList
            employees={employees}
            deleteEmployee={deleteEmployee}
            editEmployee={editEmployee}
          />
        </>
      )}
    </div>
    </center>
  );
};

export default Employee;
