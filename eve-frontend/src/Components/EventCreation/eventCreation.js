import React, { Component } from "react";
import { connect } from "react-redux";
import NavbarLogin from "../Navbar/NavbarLogin.js";
import Alert from "../Alert/Alert";
import "../Login/Login.css";
import "./eventCreation.css";

class EventCreation extends Component {
  state = {
    country:"Country",
    rows: [{}]
  };
  handleChange = idx => (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = (e) => {
    e.preventDefault()
    const item = {
      name: "",
      mobile: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  
  handleRemoveSpecificRow = (idx) => (e) => {
    e.preventDefault()
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  render() {
  return (
    
      <div  id="container" className = "eventCreationMain">
        <div className="main">
          <NavbarLogin />
          <Alert />
          <div className="row">
            <div className="div-center innerclass">
              <div className="content">
              <div className="createEventHeading">Create Event</div>
                
                  <h2 className="eventDetailsText">Event Details</h2>
              
                
                <form>
                  <div className="form-group">
                    <h7 className="eventTitile">Event Title</h7> <span className="required">*</span>
                    <input
                      type="text"
                      onChange={e => onChange(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Give a short distinct name"
                      name="eventTitle"
                    />
                  </div>
                  <div className="form-group">
                    <h7 className="eventTitile">Event Location</h7> <span className="required">*</span>
                    <input
                      type="text"
                      onChange={e => onChange(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Event Venue name"
                      name="eventVenue"
                    />
                    </div>
                    <div className="form-group">
                    <input
                      type="text"
                      onChange={e => onChange(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Address"
                      name="eventAddress"
                    />
                    </div>
                    <div className="form-group">
                    <input
                      type="text"
                      onChange={e => onChange(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Address 2"
                      name="eventAddress2"
                    />
                    </div>
                    
                    <div className="col-md-6 eventCreationCity">
                    <input
                      type="text"
                      onChange={e => onChange(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="City"
                      name="eventCity"
                    />
                    </div>
                    
                    <div className="form-group eventCreateState col-md-6">
                    <input
                      type="text"
                      onChange={e => onChange(e)}
                      className="form-control login-email "
                      id="exampleInputEmail1"
                      placeholder="State"
                      name="eventState"
                    />
                    </div>
                    <div className="form-group eventCreateZip col-md-6">
                    <input
                      type="text"
                      onChange={e => onChange(e)}
                      className=" form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Zip/Postal"
                      name="eventZip"
                    />
                    </div>
                    <div className="btn btn-group col-md-6 country-btnn">
                      <button type="button" className="form-control login-email dropdown-toggle country-btnn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.country} <span class="caret"></span>
                      </button>
                      <ul className="dropdown-menu scrollable-menu">
                        <li className="col-md-12"><a href="#">United States</a></li>
                        <li className="col-md-12"><a href="#">Australia</a></li>
                        <li className="col-md-12"><a href="#">Canada</a></li>
                        <li className="col-md-12"><a href="#">China</a></li>
                        <li className="col-md-12"><a href="#">France</a></li>
                        <li className="col-md-12"><a href="#">Germany</a></li>
                        <li className="col-md-12"><a href="#">India</a></li>
                        <li className="col-md-12"><a href="#">Japan</a></li>
                        <li className="col-md-12"><a href="#">Nepal</a></li>
                        <li className="col-md-12"><a href="#">Russia</a></li>
                        <li className="col-md-12"><a href="#">Singapore</a></li>
                        <li className="col-md-12"><a href="#">Spain</a></li>
                        <li className="col-md-12"><a href="#">United Kingdom</a></li>
                      </ul>
                    </div>
                   
                    <div className="col-md-12 form-group eventStartingDateTime">
                    <div className="col-md-6 StartDateTimeHeading">
                    <label className="control-label StartDateTimeHeading" for="date">Start Date and Time</label> <span className="required">*</span>
                    <div class="form-group">
                      <div className="col-md-6 eventStartingDateTime country-btnn">
                      <input className="form-control country-btnn" id="date" onChange={e => onChange(e)} name="eventStartDate"  placeholder="MM/DD/YYYY" type="text"/>
                      </div>
                      <div className="col-md-6 eventStartingTime country-btnn">
                      <button type="button" className="form-control country-btnn login-email dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Time<span class="caret"></span>
                      </button>
                      <ul className="dropdown-menu scrollable-menu col-md-12">
                        <li className="col-md-12"><a href="#">08:00 AM</a></li>
                        <li className="col-md-12"><a href="#">09:00 AM</a></li>
                        <li className="col-md-12"><a href="#">10:00 AM</a></li>
                        <li className="col-md-12"><a href="#">11:00 AM</a></li>
                        <li className="col-md-12"><a href="#">12:00 AM</a></li>
                        <li className="col-md-12"><a href="#">01:00 PM</a></li>
                        <li className="col-md-12"><a href="#">02:00 PM</a></li>
                        <li className="col-md-12"><a href="#">03:00 PM</a></li>
                        <li className="col-md-12"><a href="#">04:00 PM</a></li>
                        <li className="col-md-12"><a href="#">05:00 PM</a></li>
                        <li className="col-md-12"><a href="#">06:00 PM</a></li>
                        <li className="col-md-12"><a href="#">07:00 PM</a></li>
                        <li className="col-md-12"><a href="#">08:00 PM</a></li>
                      </ul>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-6 eventEndingDateTime">
                    <label className="control-label" for="date">End Date and Time</label> <span className="required">*</span>
                    <div class="form-group">
                      <div className="col-md-6 eventEndingDateTime country-btnn">
                      <input className="form-control country-btnn" id="date" onChange={e => onChange(e)} name="eventEndDate" placeholder="MM/DD/YYYY" type="text" name="eventStartDate"/>
                      </div>
                      <div className="col-md-6 eventEndingDateTime2 country-btnn">
                      <button type="button" className="form-control country-btnn login-email dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Time<span class="caret"></span>
                      </button>
                      <ul className="dropdown-menu scrollable-menu col-md-12">
                      <li className="col-md-12"><a href="#">08:00 AM</a></li>
                        <li className="col-md-12"><a href="#">09:00 AM</a></li>
                        <li className="col-md-12"><a href="#">10:00 AM</a></li>
                        <li className="col-md-12"><a href="#">11:00 AM</a></li>
                        <li className="col-md-12"><a href="#">12:00 AM</a></li>
                        <li className="col-md-12"><a href="#">01:00 PM</a></li>
                        <li className="col-md-12"><a href="#">02:00 PM</a></li>
                        <li className="col-md-12"><a href="#">03:00 PM</a></li>
                        <li className="col-md-12"><a href="#">04:00 PM</a></li>
                        <li className="col-md-12"><a href="#">05:00 PM</a></li>
                        <li className="col-md-12"><a href="#">06:00 PM</a></li>
                        <li className="col-md-12"><a href="#">07:00 PM</a></li>
                        <li className="col-md-12"><a href="#">08:00 PM</a></li>
                      </ul>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label" for="date">Event Description</label>
                        <input
                          type="text"
                          onChange={e => onChange(e)}
                          className="form-control login-email eventDescription"
                          id="exampleInputEmail1"
                          placeholder="Please provide Event description"
                          name="eventdescription"
                        />
                    </div>

                    
                      
                    
                    <label className="control-label ticketPricing" for="date">Ticket Pricing</label> <span className="required">*</span>
                    <table className="table table-bordered table-hover ticketTable" id="tab_logic">
                      <thead>
                        <tr>
                          <th className="text-center"> Ticket Type </th>
                          <th className="text-center"> Quantity </th>
                          <th className="text-center"> Price </th>
                          <th><button onClick={this.handleAddRow} className="btn btn-primary addTicketBtn">Add Ticket</button></th>
                          
                        </tr>
                      </thead>
                    <tbody>
                        {this.state.rows.map((item, idx) => (
                          <tr id="addr0" key={idx}>
                            <td>
                              <input
                                type="text"
                                name="Ticket Type"
                                value={this.state.rows[idx].name}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="quantity"
                                value={this.state.rows[idx].mobile}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                name="Price"
                                value={this.state.rows[idx].mobile}
                                onChange={this.handleChange(idx)}
                                className="form-control"
                              />
                            </td>
                            <td>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={this.handleRemoveSpecificRow(idx)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
             
           
            
                    
                  <button
                    type="submit"
                    className="btn form-control createEventBtn"
                    onClick={this.handlecreateevent}
                  >
                    Create Event
                  </button>

                  <hr/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    );
  }
}
export default EventCreation;

