import React, { Component } from "react";
import { connect } from "react-redux";
import NavbarT from "../Navbar/NavbarT.js";
import Alert from "../Alert/Alert";
import "../Login/Login.css";
import "./createCommunity.css";
import { Progress } from 'reactstrap';

class CreateCommunity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      topicName:  '',
      groupName: '',
      groupDescription: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    }) 
    console.log(this.state.topicName)
    console.log(this.state.groupDescription)
    console.log(this.state.groupName)  
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { topicName, groupName, groupDescription } = this.state
    
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3? 4: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary previousBtn" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <4){
    return (
      <button 
        className="btn float-right previousBtn" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {  
     
    return (
      <React.Fragment>
          <NavbarT />
          <Alert />

      <form onSubmit={this.handleSubmit}>
      <div className="div-center communityCreateMain">
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          topicName={this.state.topicName}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          groupName={this.state.groupName}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          groupDescription={this.state.groupDescription}
        />
        <Step4 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          
        />
        <div className="col-md-12">
          <div className="col-md-6">
        {this.previousButton()}
        </div>
        <div className="col-md-6">
        {this.nextButton()}
        </div>
        </div>
        </div>
      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group communityCreateSubMain">
      <div class="progress" style={{height: '1.2vh'}}>
        <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}}>
        
        </div>
        </div>
      
      <span className="createHeading"> First, tell us the topics that discribe your group's interests</span>
      <h4 className="step1subHeading">Be specific! This will help us promote your group to the right people.</h4>
      <div className="topicInputField">
      <input
        className="form-control step-input"
        id="exampleInputEmail1"
        name="topicName"
        type="text"
        placeholder="Give a topic name"
        value={props.username}
        onChange={props.handleChange}
        />
      </div>
      
      
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group communityCreateSubMain">
      <div class="progress" style={{height: '1.2vh'}}>
        <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}>
        
        </div>
        </div>
      <h1 className="step2Heading">What will your group’s name be?</h1>
      <h4 className="step1subHeading">Choose a name that will give people a clear idea of what the group is about. Feel free to get creative! You can edit this later if you change your mind.</h4>
      <input
        className="form-control step-input"
        id="groupName"
        name="groupName"
        type="text"
        placeholder="Enter groupname"
        value={props.username}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group communityCreateSubMain">
    <div class="progress" style={{height: '1.2vh'}}>
        <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}>
        
        </div>
        </div>
      <h1 className="step2Heading">Now describe what your group will be about</h1>
      <h4 className="step1subHeading">People will see this when we promote your group, but you’ll be able to add to it later, too.</h4>
      <ul className="step1subHeading">
        <li><span>1. What's the purpose of the group?</span></li><br></br>
        <li>2. Who should join?</li><br></br>
        <li>3. What will you do at your events?</li>
      </ul>
      <input
        className="form-control groupDescription"
        id="groupDescription"
        name="groupDescription"
        type="text"
        placeholder="Please write atleast 50 characters"
        value={props.password}
        onChange={props.handleChange}
        />  
        <div className="descriptionExampleMain">
          
            <div className="bulbImage">
              <img src="https://secure.meetup.com/mu_static/en-US/lightbulb.582d42c2.svg" alt="lightbulb"></img> <span>Here's an example:</span>
              </div>
                  
                  <div className="exampleTextMain">
                   
                      <h5 className="exampleText">"This is a group for anyone interested in hiking, rock climbing, camping, kayaking, bouldering, etc. All skill levels are welcome. I started this group to meet other outdoor enthusiasts. Looking forward to exploring the outdoors with everybody."
                      </h5>
                      
                      </div>
                      
                            
                            </div>    
    </div>
    
    </React.Fragment>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group communityCreateSubMain">
    <div class="progress" style={{height: '1.2vh'}}>
        <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
        
        </div>
        </div>
      <h1 className="step2Heading">Almost done! Just take a minute to review our guidelines</h1>
      <h4 className="step1subHeading">Meetup is all about helping people live fuller, happier lives—with the help of strong communities. This means that all groups should:</h4>
      <ul className="step1subHeading">
        <li ><span>* Provide growth opportunities for members</span></li><br></br>
        <li >* Encourage real human interactions</li><br></br>
        <li >* Meet in real life</li>
        <li >* Have a host present at all events</li>
        <li >* Be transparent about the group’s intentions</li>
      </ul>
      
        <div className="descriptionExampleMain">
          
            <div className="bulbImage">
              <img src="https://secure.meetup.com/mu_static/en-US/lightbulb.582d42c2.svg" alt="lightbulb"></img> <span>Here's an example:</span>
              </div>
                  
                  <div className="exampleTextMain">
                   
                      <h5 className="exampleText">Once you submit your group, a human at Meetup will review it based on these guidelines and make sure it gets promoted to the right people.</h5>
                      
                      </div>
                      
                            
                            </div>    
    </div>
    <button className="btn btn-block communitySignUp">Sign up</button>
    </React.Fragment>
  );
}

export default CreateCommunity;

