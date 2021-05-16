import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
//Link acts as <a> tag
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
      login: "",
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
      .post("http://localhost:5000/login", credentials)
      .then((res) => {
        if (res.status === 200) {
          console.log("success", res.data);
          this.setState({ login: "success" });
          window.location = "/drive";
        } else if (res.status === 401) {
          console.log(res.status);
          alert("wrong username or password");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });

    this.setState({ username: "", password: "" });
    console.log(credentials);
    // window.location = "/";
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
            />
            <p id="profile-name" className="profile-name-card"></p>
            <form
              className="form-signin"
              onSubmit={this.onSubmit}
              onClick={this.props.isLoggedIn(this.state.login)}
            >
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
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
