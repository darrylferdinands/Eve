import React, {Component} from 'react';
import NavbarHome from '../Navbar/NavbarHome.js';
import Footer from '../Footer/Footer';
import '../HomePage/HomePage.css';
import img1 from '../Images/img1.JPG';
import img2 from '../Images/community.jpg';

class HomePage extends Component{
    render(){
        return(<React.Fragment>
            <header id="container main" className="home-page">
            <NavbarHome/>
                <div className="row">
                    <div className="top-component">
                        <div className="top-component-media">
                        
                            <video autoplay="true" loop="true" muted="tur" poster="https://myevent.com/assets/myevent/corppage/img/hero-video-2-lg.jpg">
                                <source src="https://myevent.com/assets/myevent/corppage/misc/hero-video-2.mp4" type="video/mp4"/>
                            </video>

                        </div>

                        <div className="top-component-content">

                            <h1 className="Headline_Text">
                            Events Made Easy
                            </h1><br></br>

                            <p className="Headline_Text">
                            Plan Your Event Today
                            </p>

                            <button type="button" className="btn top-component-content-btn">Create Event</button>
                        </div>
                    </div>
                </div>
            

            <div className="row">
                <div className="col-sm-12">
                    <h1 className="cards-text">Choose your Event or Community</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 cards-main">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">
                        <div className="cards1 text-center">
                                <img src={img1} className="card-img-top"></img>
                            <div className="card-body">
                            <button type="button" className="btn btn-card btn-card1">Events</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <div className="cards1 text-center">
                                <div className="overflow">
                                    <img src={img2} className="card-img-top"></img>
                                </div>
                                <div className="card-body">
                                <button type="button" className="btn btn-card btn-card2">Communities</button>
                                    
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>

            <div className="row">

                <div className="col-xs-12 home-dark-main">
                    <div className="home-dark-words">

                    <div className="ome-dark-first-word">
                    <span className="home-dark-first-word">Your Vision</span>
                    </div>

                    <div className="home-dark-second-word">
                    <span className="home-dark-second-word">Our Innovation</span>
                    </div>

                    <div className="home-dark-third-word">
                    <span className="home-dark-third-word">Event Solution</span>
                    </div>
                    </div>
                </div>

            </div>


            <div className="row">



            </div>
            <Footer/>
            </header>
        </React.Fragment>

        )
    }
}
export default HomePage;