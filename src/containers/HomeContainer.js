import React from 'react';

import { URL_FACEBOOK, URL_INSTAGRAM, URL_TWITTER } from "../constants";
import SearchForm from '../components/Search/SearchForm';

const HomePage = () => {
    return (
        <main id="home-container">
            <div className="container-fluid">
                <div className="row">
                    <div id="lead" className="col-lg-12 align-center">
                        <div id="social-media-links">
                            <a href={URL_FACEBOOK}><img src={require("../assets/icons/socialmedia/icons8-facebook.svg")}/></a>
                            <a href={URL_INSTAGRAM}><img src={require("../assets/icons/socialmedia/icons8-instagram.svg")}/></a>
                            <a href={URL_TWITTER}><img src={require("../assets/icons/socialmedia/icons8-twitter.svg")}/></a>
                        </div>
                        <h1 className="hoppiSpaceBrandName">hoppi space</h1>
                        <h4>Connecting the artist within to the space you are without</h4>
                        <SearchForm/>
                    </div>
                </div>
                <div className="row">
                    <div id="how-it-works" className="col-lg-12">
                        <h2>How It Works</h2>
                        <h3>Browse, Book, Pay</h3>
                        <hr/>
                        <p className="lead">We are your new favorite local coffee shop community board. Browse hundreds
                            of available workshops in your area or worldwide using our fast and efficient search engine.
                            We optimize results with your craft needs, tools, and budget in mind.
                            When you've found "the one", our effortless booking system will relay your request to our
                            owners for confirmation, and utilizing our secure Braintree-based payment system, make your
                            payment. <span className="font-weight-bold font-italic">Welcome home!</span></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
