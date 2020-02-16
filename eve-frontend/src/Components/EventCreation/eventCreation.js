import React, { Component } from "react";
import { connect } from "react-redux";
import NavbarT from "../Navbar/NavbarT.js";
import Alert from "../Alert/Alert";
import "../Login/Login.css";
import "./eventCreation.css";

class EventCreation extends Component {
 
  state = {
    rows: [{}],
    data:{},
   
  }
  handleChange = (idx) => (e) => {
    e.preventDefault();
    
    const { name, value } = e.target;
  
    const rows = [...this.state.rows];
    rows[idx] = {...rows[idx],[name]:value}
   
    this.setState({
      rows
    })
   
  }
  handleAddRow = (e) => {
    e.preventDefault()
    const item = {
      type: "",
      quantity: "",
      price:""
    };

 
    this.setState({
      rows: [...this.state.rows, item]
    });
  }



  handleRemoveSpecificRow = (idx) => (e) => {
    e.preventDefault()
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }


  handleCh = async e =>{
    e.preventDefault()
   await this.setState({
    data: {...this.state.data,[e.target.name]:e.target.value}
   })

   console.log(this.state.data)
 }

  render() {
    
    return (
      <React.Fragment>
      <div id="container" className="eventCreationMain">
        <div className="main">
          <NavbarT />
          <Alert />
          <div className="row">
            <div className="createEventHeading">Create An Event</div>
            <div className="div-center innerclass">
              <div className="content">


                <h2 className="eventDetailsText">Event Details</h2>


                <form>
                  <div className="form-group">
                    <h7 className="eventTitile">Event Title</h7> <span className="required">*</span>
                    <input
                      type="text"
                      onChange={e=> this.handleCh(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Give a short distinct name"
                      name="eventTitle"
                    />
                  </div>

                  <div className="form-group">
                    <h7 className="eventTitile">Organizer Name</h7><span className="required">*</span>
                    <input
                      type="text"
                      onChange={e => this.handleCh(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Give a short distinct name"
                      name="event"
                    />
                  </div>

                  <div className="form-group">
                    <label className="control-label eventTitile" for="date">Organizer Description</label>
                    <input
                      type="text"
                      onChange={e=> this.handleCh(e)}
                      className="form-control login-email eventDescription"
                      id="exampleInputEmail1"
                      placeholder="Please provide Event description"
                      name="organiserdescription"
                    />
                  </div>

                  <div className="form-group">
                    <h7 className="eventTitile">Event Location</h7> <span className="required">*</span>
                    <input
                      type="text"
                      onChange={e=> this.handleCh(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Event Venue Name"
                      name="eventVenue"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={e=> this.handleCh(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Address"
                      name="eventAddress"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={e=> this.handleCh(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Address 2"
                      name="eventAddress2"
                    />
                  </div>

                  <div className="col-md-6 eventCreationCity">
                    <input
                      type="text"
                      onChange={e=> this.handleCh(e)}
                      className="form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="City"
                      name="eventCity"
                    />
                  </div>

                  <div className="form-group eventCreateState col-md-6">
                    <input
                      type="text"
                      onChange={e=> this.handleCh(e)}
                      className="form-control login-email "
                      id="exampleInputEmail1"
                      placeholder="State"
                      name="eventState"
                    />
                  </div>
                  <div className="form-group eventCreateZip col-md-6">
                    <input
                      type="text"
                      onChange={e=> this.handleCh(e)}
                      className=" form-control login-email"
                      id="exampleInputEmail1"
                      placeholder="Zip/Postal"
                      name="eventZip"
                    />
                  </div>
                  <div className="btn btn-group col-md-6 country-btnn">
                    <button  onClick={e=> this.handleCh(e)} type="button" className="form-control login-email dropdown-toggle country-btnn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Event Type <span class="caret"></span>
                    </button>
                    <ul onChange={e=> this.handleCh(e)} className="dropdown-menu scrollable-menu">
                      <li onChange={e=> this.handleCh(e)} name="conferences" className="col-md-12"><a href="#">Conferences</a></li>
                      <li className="col-md-12"><a href="#">Job Fairs</a></li>
                      <li className="col-md-12"><a href="#">Music</a></li>
                      <li className="col-md-12"><a href="#">Product Launches</a></li>
                      <li className="col-md-12"><a href="#">Reunions</a></li>
                      <li className="col-md-12"><a href="#">Social</a></li>
                      <li className="col-md-12"><a href="#">Sports</a></li>
                      <li className="col-md-12"><a href="#">Technical</a></li>
                      <li className="col-md-12"><a href="#">Trade Show/Expo</a></li>
                      <li className="col-md-12"><a href="#">Worshops</a></li>
                    </ul>
                  </div>

                  <div className="col-md-12 form-group eventStartingDateTime">
                    <div className="col-md-6 StartDateTimeHeading">
                      <label className="eventTitile StartDateTimeHeading" for="date">Start Date and Time</label> <span className="required">*</span>
                      <div class="form-group">
                        <div className="col-md-6 eventStartingDateTime country-btnn">
                          <input onChange={e=> this.handleCh(e)} className="form-control country-btnn" id="date" name="dateStart" placeholder="MM/DD/YYYY" type="text" />
                        </div>
                        <div className="col-md-6 eventStartingTime country-btnn">
                          <button onClick={e=> this.handleCh(e)} name="eventstarttime" type="button" className="form-control country-btnn login-email dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Time<span class="caret"></span>
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
                      <label className="eventTitile EndDateTime" for="date">End Date and Time</label> <span className="required">*</span>
                      <div class="form-group">
                        <div className="col-md-6 eventEndingDateTime country-btnn EndDateTime">
                          <input onChange={e=> this.handleCh(e)} className="form-control country-btnn EndDateTime" id="date" name="dateEnd" placeholder="MM/DD/YYYY" type="text" />
                        </div>
                        <div className="col-md-6 eventEndingDateTime2 country-btnn">
                          <button onClick={e=> this.handleCh(e)} type="button" className="form-control country-btnn login-email dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <label className="eventTitile" for="date">Event Description</label>
                    <input
                      type="text"
                      onChange={e=> this.handleCh(e)}
                      className="form-control login-email eventDescription"
                      id="exampleInputEmail1"
                      placeholder="Please provide event description"
                      name="eventdescription"
                    />
                  </div>




                  <label className="eventTitile ticketPricing" for="date">Ticket Pricing</label> <span className="required">*</span>
                  <table className="table ticketTable" id="tab_logic">
                    <thead>
                      <tr className="ticketTable">
                        <th className="eventTitile"> Ticket Type </th>
                        <th className="eventTitile"> Quantity </th>
                        <th className="eventTitile"> Price </th>
                        <th><button onClick={this.handleAddRow} className="btn form-control btn-outline-danger btn-sm tablebtn">Add Ticket</button></th>

                      </tr>
                    </thead>
                    <tbody>
                      {this.state.rows.map((item, idx) => (
                        <tr id="addr0" key={idx}>
                          <td>
                            <input
                              type="text"
                              name="type"
                              value={this.state.rows[idx].name}
                              onChange={this.handleChange(idx)}
                              className="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              name="quantity"
                              value={this.state.rows[idx].quantity}
                              onChange={this.handleChange(idx)}
                              className="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="price"
                              value={this.state.rows[idx].price}
                              onChange={this.handleChange(idx)}
                              className="form-control"
                            />
                          </td>

                          <td>
                            <button
                              className="btn btn-outline-danger btn-sm form-control tablebtn"
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
                    Publish Your Event
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
  }
}
export default EventCreation;


