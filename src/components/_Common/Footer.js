import React from 'react';

const Footer = () => {
    return (
        <footer id="footer-items">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <ul className="social-share" id="footer-social">
                            <li className="footer-link-header">Socialize</li>
                            <li><a href="https://www.facebook.com/hoppispace">Facebook</a></li>
                            <li><a href="https://www.instagram.com/hoppispace">Instagram</a></li>
                            <li><a href="https://www.twitter.com/hoppispace">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4" id="footer-contact">
                        <ul>
                            <li className="footer-link-header">Get In Touch</li>
                            <li>General: contact@hoppispace.com</li>
                            <li>Support: support@hoppispace.com</li>
                            <li>{/*TO DO: Add phone icon*/}Phone: 000.000.0000</li>
                        </ul>
                    </div>
                    <div className="col-lg-4" id="footer-copyright">
                        <ul id="footer-copyright">
                            <li className="footer-link-header">Legal stuff</li>
                            <li>Copyright &copy; Hoppi Space 2018</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
