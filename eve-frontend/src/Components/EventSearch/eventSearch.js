import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import NavbarLogin from "../Navbar/NavbarLogin.js";
import Alert from "../Alert/Alert";
import "../Login/Login.css";

const EventSearch = () => {
  return (
    <React.Fragment>
      <div id="container">
        <div className="main">
          <NavbarLogin />
          <Alert />
          <div className="row">
            <div className="div-center">
              <div className="content">
                <h2 className="login-lets">Let's get Started</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

EventSearch.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(EventSearch);
