import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
//Link acts as <a> tag
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();

    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5000/register", credentials)
      .then((res) => console.log(res.data, credentials));

    this.setState({ username: "", password: "" });
    // console.log(credentials);
    window.location = "/";
  }

  render() {
    return (
      <div className="wrapper">
        <div>
          <div className="card card-container">
            <img
              id="profile-img"
              className="profile-img-card"
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt=""
            />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <span></span>
              <input
                type="name"
                className="form-control"
                placeholder="UserName"
                value={this.state.username}
                onChange={this.onChangeUsername}
                autofocus
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />

              <button
                className="btn btn-lg btn-primary btn-block btn-signin"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
