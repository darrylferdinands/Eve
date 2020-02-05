import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import NavbarLogin from "../Navbar/NavbarLogin.js";

import Alert from "../Alert/Alert";
import "./Login.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(email);
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/eventsearch" />;
  }

  return (
    <React.Fragment>
      <div id="container" className="LoginMain">
        <div className="main">
          <NavbarLogin />
          <Alert />
          <div className="row">
            <div className="div-center">
              <div className="content">
                <h2 className="login-lets">Let's get Started</h2>
                <h3 className="login-use">Use Google or Email to sign in</h3>
                <hr />
                <form onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="email"
                      onChange={e => onChange(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      onChange={e => onChange(e)}
                      className="form-control login-password"
                      id="exampleInputPassword"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <h5>
                    Don't have an account? <a href="/signup">Sign up</a>
                  </h5>
                  <button
                    type="submit"
                    className="btn form-control get-started"
                  >
                    Login
                  </button>

                  <hr />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
