import React from 'react';

import {URL_FACEBOOK, URL_INSTAGRAM, URL_TWITTER} from "../../constants";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <ul className="social-share" id="footer-social">
                            <li className="footer-link-header">Socialize</li>
                            <li>
                                <a href={URL_FACEBOOK}>
                                    <img src={require("../../assets/icons/socialmedia/icons8-facebook.svg")}/>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href={URL_INSTAGRAM}>
                                    <img src={require("../../assets/icons/socialmedia/icons8-instagram.svg")}/>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href={URL_TWITTER}>
                                    <img src={require("../../assets/icons/socialmedia/icons8-twitter.svg")}/>
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="footer-contact" className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <ul>
                            <li className="footer-link-header">Get In Touch</li>
                            <li>General: contact@hoppispace.com</li>
                            <li>Support: support@hoppispace.com</li>
                            <li>{/*TO DO: Add phone icon*/}Phone: 000.000.0000</li>
                        </ul>
                    </div>
                    <div id="footer-copyright" className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <ul id="footer-copyright">
                            <li className="footer-link-header">Legal stuff</li>
                            <li>Copyright &copy; Hoppi Space 2018</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <a href="https://icons8.com">Icon pack by Icons8</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
