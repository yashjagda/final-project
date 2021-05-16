import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Drive from "./components/drive.component";
import Register from "./components/register.component";
import Login from "./components/login.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }

  loggedIn = (value) => {
    console.log("Value", value);
    if (value === "success") {
      console.log("success");
    }
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar toggle={this.state.toggle} />

          <Route path="/" exact component={Home} />
          <Route path="/drive" component={Drive} />
          <Route path="/register" component={Register} />
          <Route
            path="/login"
            render={(props) => <Login {...props} isLoggedIn={this.loggedIn} />}
          />
          {/* <Route path="/user" component={CreateUser} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
