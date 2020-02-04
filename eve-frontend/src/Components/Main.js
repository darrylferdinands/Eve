import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';
import NavbarHome from './Navbar/NavbarHome.js';
import Footer from './Footer/Footer.js';
import NavbarLogin from './Navbar/NavbarLogin.js';
import Login from './Login/Login';
import SignUp from './SignUp/signup';
//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/navbarhome" component={NavbarHome}/>
                <Route exact path="/Footer" component={Footer}/>
                <Route exact path="/NavbarLogin" component={NavbarLogin}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
            </div>
        )
    }
}
export default Main;