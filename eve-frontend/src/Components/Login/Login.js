import React, {Component} from 'react';
import NavbarLogin from '../Navbar/NavbarLogin.js';
import Footer from '../Footer/Footer';
import './Login.css';
import axios from 'axios';
import {Redirect} from 'react-router';


class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
          authFlag: false,
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

    handleLoginUser = (e) => {
        e.preventDefault();
        const data ={
            email : this.state.email,
            password : this.state.password,
        }
        axios.post('http://localhost:3001/api/auth',data)
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


                        <h2 className="login-lets">Let's get Started</h2>
                        <h3 className="login-use">Use Google or Email to sign in</h3>
                        <hr />
                        <form>
                        <div className="form-group">
                            <input type="email" onChange={this.handleEmailChange} className="form-control login-email" id="exampleInputEmail1" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" onChange={this.handlePasswordChange} className="form-control login-password" id="exampleInputPassword" placeholder="Password"/>
                        </div>
                        <h5>Don't have an account? <a href="/signup">Sign up</a></h5>
                        <button type="submit" onClick={this.handleLoginUser} className="btn form-control get-started">Login</button>
                        
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
export default Login;