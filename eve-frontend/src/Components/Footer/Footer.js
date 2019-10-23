import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
    return(
        <footer className="page-footer">
            <div className="container-fluid footer-content">
                <ul className="footer-button text-center">
                    <li><button className="btn footer-btn1">About</button></li>
                 
                    <li><button className="btn footer-btn2">Home</button></li>
       
                    <li><button className="btn footer-btn3">Subscribe</button></li>
                </ul>

                </div>


</footer>
    )
    }
}
export default Footer;