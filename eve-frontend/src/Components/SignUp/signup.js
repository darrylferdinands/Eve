import React, {Component} from 'react';
import NavbarLogin from '../Navbar/NavbarLogin.js';
import Footer from '../Footer/Footer';
import {Redirect} from 'react-router';
import './Signup.css';
import axios from 'axios';


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state ={
          authFlag: false,
          name:"",
          email: "",
          password:"",
          restoken:""
        }
    }
    handleEmailChange = (e) =>{
        this.setState({
            email : e.target.value
        })
    }

    handlePasswordChange = (e) =>{
        this.setState({
            password : e.target.value
        })
    }

    handleNameChange = (e) =>{
        this.setState({
            name : e.target.value
        })
    }

    handleSignupUser = (e) => {
        e.preventDefault();
        const data ={
            name: this.state.name,
            email : this.state.email,
            password : this.state.password
        }
        console.log(data);
        axios.post('http://localhost:3001/api/users',data)
            .then(response => {
                console.log("Status Code : ",response.status);
                console.log(response.data);
                if(response.status === 200){
                    this.setState({
                        authFlag : true,
                        restoken:response.data.token
                    })
                    localStorage.setItem("token",response.data.token);
                }else{
                    this.setState({
                        authFlag : false
                    })
                }
            }).catch(err => {
                this.setState({error : true});
                console.log(err);
            });
    }

    render(){
        let redirectVar = null;
        if(this.state.authFlag === true){    
            redirectVar = <Redirect to = "/"></Redirect>
        }
        return(<React.Fragment>
            <div id="container" className="LoginMain">
            {redirectVar}
                <div className="main">
                <NavbarLogin/>

                <div className="row">
                
                    <div className="div-center">


                    <div className="content">


                        <h2 className="login-lets">Welcome</h2>
                        <h3 className="login-use">Create an account</h3>
                        <hr />
                        <form>
                        <div className="form-group">
                            <input type="text" onChange={this.handleNameChange} className="form-control signup-fname" id="exampleInputFName" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                        <input type="email" onChange={this.handleEmailChange} className="form-control signup-email" id="exampleInputEmail1" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                        <input type="password" onChange={this.handlePasswordChange} className="form-control signup-password" id="exampleInputPassword" placeholder="Password"/>
                        </div>
                        
                        <button type="submit" onClick={this.handleSignupUser} className="btn form-control get-started">Sign Up</button>
                        <hr />
                       
                    
                        </form>
                        </div>
                    </div>
                    </div>
            </div> 
           
            </div>
            <Footer/>
            </React.Fragment>

        )
    }
}
export default SignUp;