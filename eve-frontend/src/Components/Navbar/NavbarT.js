import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./NavbarT.css";
import { logout } from "../../actions/auth";

const NavbarHome = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [loginClicked, setLoginClicked] = useState({
    clicked: false
  });

  const { clicked } = loginClicked;

  const onClick = e => setLoginClicked({ ...setLoginClicked, clicked: true });

  if (clicked) {
    return <Redirect to="/login" />;
  }

  const authLinks = (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img alt="logo" src="logo.png"></img>
          </a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button class="btn navbar-btn navbar-btn2">Help</button>
            </li>
            <li>
              <button onClick={logout} class="btn navbar-btn navbar-btn3">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img alt="logo" src="logo.png"></img>
          </a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button class="btn navbar-btn navbar-btn1">Create Event</button>
            </li>
            <li>
              <button class="btn navbar-btn navbar-btn2">Help</button>
            </li>
            <li>
              <button
                onClick={e => onClick(e)}
                class="btn navbar-btn navbar-btn3"
              >
                {" "}
                Login
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

NavbarHome.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(NavbarHome);
