import React, { Component } from "react";
import NavbarT from "../Navbar/NavbarT.js";
import "./eventHome.css";
import Footer from "../Footer/Footer";

class EventHome extends Component {
    constructor(props){
        super(props);
        this.state ={
          redirectFlag: false,
          EventType: "Event Type",
        }
    }
  render() {
    return (
        <React.Fragment>
<NavbarT/>
<div id="container" className="eventHomeMain">
    <div className="top-component-eventhome">
            <div className="top-component-eventhome-media">
              <img src="images/concert6.jpg" align="bottom"></img>
            </div>

            <div className="top-component-eventhome-content">
              <div className="Headline_Text_eventhome">Want to go out?</div>
            <br></br>
                    <div className="form-group">
                    <h5 className="eventTitle-eventhome">When?</h5>
                    <input
                      type="date"
                      //onChange={e => onChange(e)}
                      className="form-control event-details-eventhome"
                      id="exampleInputEmail1"
                      placeholder="Give a short distinct name"
                      name="eventTitle"
                    />
                    </div>
                  <div className="form-group">
                    <h5 className="eventTitle-eventhome">Where?</h5>
                    <input
                      type="text"
                      //onChange={e => onChange(e)}
                      className="form-control event-details-eventhome"
                      id="exampleInputEmail1"
                      placeholder="Enter your preferred city"
                      name="eventTitle"
                    />
                  </div>
                  <div className="form-group">
                  <h5 className="eventTitle-eventhome">What's your mood like?</h5>
                  <div className="btn-group country-btnn-eventhome">
                    
                     <button type="button" className="form-control dropdown-toggle country-btnn-eventhome" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.state.EventType} <span class="caret"></span>
                    </button>
                    <ul className="dropdown-menu scrollable-menu">
                      <li className="col-md-12"><a href="#">Conferences</a></li>
                      <li className="col-md-12"><a href="#">Job Fairs</a></li>
                      <li className="col-md-12"><a href="#">Music</a></li>
                      <li className="col-md-12"><a href="#">Product Launches</a></li>
                      <li className="col-md-12"><a href="#">Reunions</a></li>
                      <li className="col-md-12"><a href="#">Social</a></li>
                      <li className="col-md-12"><a href="#">Sports</a></li>
                      <li className="col-md-12"><a href="#">Technical</a></li>
                      <li className="col-md-12"><a href="#">Trade Show/Expo</a></li>
                      <li className="col-md-12"><a href="#">Workshops</a></li>
                    </ul>
                  </div>
                  </div>
                 

              <button type="button" onClick={this.createEvent} className="btn top-component-eventhome-content-btn">
                Search..
              </button>
            </div>

    </div>

    <div className="middlecontent-eventhome">
        <div className="HeadlineEventText-eventhome">Top Trending Events</div>
    </div>   

    <div className="container">
        <div className="row">
            <div className="card-eventhome col-xs-4">
                <div className="banner">
                <img src="images/whiskey.jpg" align="bottom"></img>
                </div>
                <div className="dateandtime">
                    Friday, March 27, 6:00PM
                </div>
                <div className="title" onClick={{}}>
                    Whiskies of the World, San Jose, 2020
                </div>
                <div className="location">
                    San Jose Marriott, San Jose, California
                </div>
            </div>
         
            <div className="card-eventhome col-xs-4">
                Card 2   
            </div>
            
            <div className="card-eventhome col-xs-4">
                Card 3
            </div>
        </div>
    </div>  

</div>
<div className="footer">
<Footer/>
</div>

        </React.Fragment>
     

    );
  }
}
export default EventHome;


