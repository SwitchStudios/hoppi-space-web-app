import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav id="primary-navigation" className="navbar navbar-expand-sm bg-light navbar-dark fixed-top">
                <a class="navbar-brand" href="#">Hoppi Space</a>
                <ul className="navbar-nav">
                    <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item active"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item active"><Link to="/search" className="nav-link">Search</Link></li>
                    <li className="nav-item active"><Link to="/list" className="nav-link">List</Link></li>
                    <li className="nav-item active"><Link to="/messaging" className="nav-link">Messaging</Link></li>
                    <li className="nav-item active"><Link to="/profile" className="nav-link">Profile</Link></li>
                    <li className="nav-item active"><Link to="/support" className="nav-link">Support</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
