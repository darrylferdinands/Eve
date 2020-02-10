import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../Navbar/NavbarLogin.css";
import { logout } from "../../actions/auth";

const NavbarLogin = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav class="navbar navbar-default navbar-login">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img alt="logo-description" src="logo.png"></img>
          </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right navbarlogin-search navbarlogin-button">
            <li>
              <button class="btn navbarlogin-btn ">Help</button>
            </li>
            <li>
              <button onClick={logout} class="btn navbarlogin-btn ">
                <a class="loganchor" href="/login">
                  Logout
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav class="navbar navbar-default navbar-login">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img alt="logo" src="logo.png"></img>
          </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right navbarlogin-search navbarlogin-button">
            <li>
              <button class="btn navbarlogin-btn ">Help</button>
            </li>
            <li>
              <button class="btn navbarlogin-btn ">
                <a class="loganchor" href="/login">
                  Login
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  return (
    <div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

NavbarLogin.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(NavbarLogin);
