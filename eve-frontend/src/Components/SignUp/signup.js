import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alerts";
import { register } from "../../actions/auth";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import NavbarLogin from "../Navbar/NavbarLogin.js";
import Alert from "../Alert/Alert";
import "./Signup.css";

const SignUp = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password
      });
    }
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
                <h2 className="login-lets">Welcome</h2>
                <h3 className="login-use">Create an account</h3>
                <hr />
                <form onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={e => onChange(e)}
                      name="name"
                      className="form-control signup-fname"
                      id="exampleInputFName"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      onChange={e => onChange(e)}
                      className="form-control signup-email"
                      id="exampleInputEmail1"
                      name="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      onChange={e => onChange(e)}
                      className="form-control signup-password"
                      id="exampleInputPassword"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      onChange={e => onChange(e)}
                      className="form-control signup-password"
                      id="exampleInputPassword"
                      placeholder="Confirm Password"
                      name="password2"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn form-control get-started"
                  >
                    Sign Up
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

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(SignUp);
