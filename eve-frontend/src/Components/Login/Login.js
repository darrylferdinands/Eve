import React, {Component} from 'react';
import NavbarLogin from '../Navbar/NavbarLogin.js';
import Footer from '../Footer/Footer';
import './Login.css';


class Login extends Component{
    render(){
        return(<React.Fragment>
            <div id="container" className="LoginMain">
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
                            <input type="email" className="form-control login-email" id="exampleInputEmail1" placeholder="Email address"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control login-password" id="exampleInputPassword" placeholder="Password"/>
                        </div>
                        
                        <button type="submit" className="btn form-control get-started">Login</button>
                       
                     
                       <button type="submit" className="btn form-control get-started"><a href="/signup" style={{color:'white'}}>Sign Up</a></button>
                        
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