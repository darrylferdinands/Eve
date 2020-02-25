import React, { Component } from "react";
import NavbarHome from "../Navbar/NavbarHome.js";
import "../HomePage/HomePage.css";
import img1 from "../Images/img1.JPG";
import img2 from "../Images/community.jpg";
import { Redirect } from "react-router-dom";

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state ={
      redirectFlag: false,
      eventFlag:false
    }
}
  createEvent = (e) => {
    this.setState ({
      redirectFlag: true
    })
  }
  eventHome = (e) => {
    this.setState ({
      eventFlag: true
    })
  }
  render(){
    let redirectVar = null;
    if(this.state.redirectFlag){
      redirectVar = <Redirect to="/createevent" />
    }
    if(this.state.eventFlag){
      redirectVar = <Redirect to="/eventhome" />
    }
  return (
    <React.Fragment>
      <header id="container main" className="home-page">
        <NavbarHome />
        {redirectVar}
        <div className="row">
          <div className="top-component">
            <div className="top-component-media">
              <video
                autoplay="true"
                loop="true"
                muted="tur"
                poster="https://myevent.com/assets/myevent/corppage/img/hero-video-2-lg.jpg"
              >
                <source
                  src="https://myevent.com/assets/myevent/corppage/misc/hero-video-2.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="top-component-content">
              <h1 className="Headline_Text">Events Made Easy</h1>
              <br></br>

              <p className="Headline_Text">Plan Your Event Today</p>

              <button type="button" onClick={this.createEvent} className="btn top-component-content-btn">
                Create Event
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 second-component">
            <h1 className="cards-text">Choose your Event or Community</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 cards-main">
            <div className="col-xs-1"></div>
            <div className="col-xs-4">
              <div className="cards1 text-center">
              <a href="http://localhost:3000/eventhome">
                <img alt="logo" src={img1} className="card-img-top" href='/eventhome'></img>
              </a>
                <div className="card-body">
                  <button type="button" className="btn btn-card btn-card1" onClick={this.eventHome}>
                    Events
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xs-2"></div>
            <div className="col-xs-4">
              <div className="cards1 text-center">
                <div className="overflow">
                  <img alt="logo" src={img2} className="card-img-top"></img>
                </div>
                <div className="card-body">
                  <button type="button" className="btn btn-card btn-card2">
                    Communities
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 home-dark-main">
            <div className="home-dark-words">
              <div className="home-dark-first-word">
                <span className="home-dark-first-word">Your Vision</span>
              </div>

              <div className="home-dark-second-word">
                <span className="home-dark-second-word">Our Innovation</span>
              </div>

              <div className="home-dark-third-word">
                <span className="home-dark-third-word">Event Solution</span>
              </div>
            </div>
          </div>

          <div className="row"></div>
        </div>
      </header>
    </React.Fragment>
  );
  }
};

export default HomePage;
