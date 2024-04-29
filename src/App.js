
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Employee from "./Employee";
import "./App.css"; 
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
         
            <li >
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/employee">Employee</Link>
            </li>
            
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
