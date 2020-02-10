import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
    return(
            <div className="container testfoot">
                <ul className="footer-button col-xs-12">
                    <li><button className="btn footer-btn1">About</button></li>
                 
                    <li><button className="btn footer-btn2">Home</button></li>
       
                    <li><button className="btn footer-btn3">Subscribe</button></li>
                </ul>
            </div>
    )
    }
}
export default Footer;