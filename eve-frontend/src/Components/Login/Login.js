import React, {Component} from 'react';
import NavbarLogin from '../Navbar/NavbarLogin.js';
import Footer from '../Footer/Footer';
import './Login.css';


class Login extends Component{
    render(){
        return(<React.Fragment>
            <header id="container" className="LoginMain">
                <div className="main">
                <NavbarLogin/>

                <div className="row">
                
                    <div className="div-center">


                    <div className="content">


                        <h2 className="login-lets">Let's get Started</h2>
                        <h3 className="login-use">Use Google or Email to get started</h3>
                        <hr />
                        <form>
                        <div className="form-group">
                            <input type="email" className="form-control login-email" id="exampleInputEmail1" placeholder="Email address"/>
                        </div>
                        
                        <button type="submit" className="btn form-control get-started">Get Started</button>
                        <hr />
                       
                    
                        </form>
                        </div>
                    </div>
                    </div>
               

            
            
           
        
            </div> 
           
            </header>
            <br></br>
            <Footer/>
            </React.Fragment>

        )
    }
}
export default Login;