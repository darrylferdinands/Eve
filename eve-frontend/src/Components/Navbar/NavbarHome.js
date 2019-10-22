import React,{Component} from 'react';
import './NavbarHome.css';

//create the Navbar Component
class NavbarHome extends Component {
 
    render(){
   
    return(
        
  <nav class="navbar">
    
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/"><img src="logo.png"></img></a>
    </div>
    <ul class="nav navbar-nav navbar-right nav-btn">
   
      <li><button class="btn navbar-btn navbar-btn1">Create Event</button></li>
      <li><button class="btn navbar-btn navbar-btn2">Help</button></li>
      <li><button class="btn navbar-btn navbar-btn3">Login</button></li>
      
    </ul>
  </div>
</nav>
        
        )
    }
}

export default NavbarHome;