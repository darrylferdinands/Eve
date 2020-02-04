import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import NavbarHome from './Navbar/NavbarHome.js';
import Footer from './Footer/Footer';

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                <Route path="/" component={HomePage}/>
                <Route path="/navbarhome" component={NavbarHome}/>
                <Route path="/Footer" component={Footer}/>
            </div>
        )
    }
}
export default Main;