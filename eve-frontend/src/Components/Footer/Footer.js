import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
    return(
        <footer className="container page-footer">

            <div className="col-sm-12 footer-content">
                <div className = "col-sm-2 footer-company"> EVE</div>
                <div className="col-sm-8 footer-buttons">
                <ul className="footer-button text-center">
                    <li><button className="btn footer-btn1">About</button></li>
                 
                    <li><button className="btn footer-btn2">Home</button></li>
       
                    <li><button className="btn footer-btn3">Subscribe</button></li>
                </ul>
                </div>
                <div className="col-sm-2 footer-state">San Jose</div>
            
            </div>


</footer>
    )
    }
}
export default Footer;