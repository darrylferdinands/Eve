import React, {Component} from 'react';
import NavbarLogin from '../Navbar/NavbarLogin.js';
import Footer from '../Footer/Footer';
import './Signup.css';


class SignUp extends Component{
    render(){
        return(<React.Fragment>
            <div id="container" className="LoginMain">
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
                            <input type="email" className="form-control login-email" id="exampleInputEmail1" placeholder="Email address"/>
                        </div>
                        <div className="input-group names">
                            <input type="text" className="form-control signup-fname" id="exampleInputFName" placeholder="First Name"/>
                            <span class="input-group-addon"> </span>
                            <input type="text" className="form-control signup-lname" id="exampleInputLName" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control signup-password" id="exampleInputPassword" placeholder="Password"/>
                        </div>
                        
                        <button type="submit" className="btn form-control get-started">Sign Up</button>

                           <button type="submit" className="btn form-control get-started"><a href="/login" style={{color:'white'}}>Login</a></button>
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