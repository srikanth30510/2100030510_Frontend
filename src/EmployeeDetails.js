
import React from "react";
import "./styles.css";

const EmployeeDetails = ({ employee }) => {
  return (
    <div className="employee-details">
      <h2>Employee Details</h2>
      <div>
        <strong>ID:</strong> {employee.id}
      </div>
      <div>
        <strong>First Name:</strong> {employee.FirstName}
      </div>
      <div>
        <strong>Last Name:</strong> {employee.LastName}
      </div>
      <div>
        <strong>Department:</strong> {employee.Department}
      </div>
      <div>
        <strong>Salary:</strong> ${employee.Salary}
      </div>
      <div>
        <strong>Position:</strong>{" "}
        {employee.Age > 40 ? "Senior Employee" : "Junior Employee"}
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default EmployeeDetails;
