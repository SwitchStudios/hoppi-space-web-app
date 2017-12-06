import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav id="primary-navigation" className="navbar navbar-expand-sm bg-light navbar-dark fixed-top">
                <ul className="navbar-nav">
                    <li className="nav-item active"><Link to="/">Home</Link></li>
                    <li className="nav-item active"><Link to="/about">About</Link></li>
                    <li className="nav-item active"><Link to="/search">Search</Link></li>
                    <li className="nav-item active"><Link to="/list">List</Link></li>
                    <li className="nav-item active"><Link to="/messaging">Messaging</Link></li>
                    <li className="nav-item active"><Link to="/profile">Profile</Link></li>
                    <li className="nav-item active"><Link to="/support">Support</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
