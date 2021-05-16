import React, { Component } from "react";
import { Link } from "react-router-dom";
//Link acts as <a> tag
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Lambda Bucket
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {/* <li className="navbar-item">
              <Link to="/drive" className="nav-link">
                Dashboard
              </Link>
            </li> */}
            <li className="navbar-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}