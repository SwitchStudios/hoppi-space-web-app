import React from 'react';

import {URL_FACEBOOK, URL_INSTAGRAM, URL_TWITTER} from "../../constants";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <span>Need Help? +1 999-999-9999</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <span><a href="/">Contact</a></span>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <h5>Our Mission</h5>
                        <div>Hoppi Space transforms the traditional avenues of searching for art-friendly venues to be
                            more convenient for today's creative. Implementing a "one-stop shop" approach, you can
                            quickly reserve and use immediately, gaining more studio time and slashing the time
                            searching for it.
                        </div>
                        <button className="btn btn-primary btn-large">Request Free Consultation!</button>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5>Connect With Us</h5>
                                    <div>
                                        <a href={URL_FACEBOOK}>
                                            <img src={require("../../assets/icons/socialmedia/icons8-facebook.svg")}/>
                                        </a>
                                        <a href={URL_INSTAGRAM}>
                                            <img src={require("../../assets/icons/socialmedia/icons8-instagram.svg")}/>
                                        </a>
                                        <a href={URL_TWITTER}>
                                            <img src={require("../../assets/icons/socialmedia/icons8-twitter.svg")}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-lg-6">
                                    <a href="/"></a>
                                    <a href="/"></a>
                                    <a href="/"></a>
                                    <a href="/"></a>
                                    <a href="/"></a>
                                </div>
                                <div className="col-lg-6">
                                    <a href="/"></a>
                                    <a href="/"></a>
                                    <a href="/"></a>
                                    <a href="/"></a>
                                    <a href="/"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div>&copy; 2018 Hoppi Space</div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <a href="https://icons8.com">Icon pack by Icons8</a>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        Privacy Policy
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        Sitemap
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
